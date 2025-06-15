// repositories/PaymentsRepository.js
import Payment from '../models/Payments';

class PaymentsRepository {
    async savePayment(session) {
        const userId = session.metadata.userId;
        const payment = new Payment({
            userId: userId,
            oneTimePayment: [{
                date: new Date(),
                price: session.amount_total / 100,
                packageId: session.metadata?.packageId,
                status: 'Paid',
            }],
        });
        await payment.save();
        return payment;
    }

    async saveSubscription(subscription: { client_reference_id: string, metadata: { userId: any; packageId: any; }; plan: { interval: any; }; status: string; current_period_end: number; current_period_start: number; }) {
        const payment = new Payment({
            userId: subscription.client_reference_id,
            Subscription: {
                billingCycle: subscription.plan.interval === 'month' ? 'monthly' : 'yearly',
                status: subscription.status === 'paid' ? 'active' : 'incomplete',
                paymentMethod: 'stripe',
                packageId: subscription.metadata?.packageId,
                nextBilledAt: new Date(subscription.current_period_end * 1000),
                startDate: new Date(subscription.current_period_start * 1000),
                endDate: null, // End date is null for active subscriptions
            },
        });
        await payment.save();
        return payment;
    }

    async handleSubscriptionPayment(invoice: { subscription: any; }) {
        const subscription = invoice.client_reference_id;
        return Payment.findOneAndUpdate(
            {'Subscription.packageId': subscription.metadata?.packageId},
            {
                $set: {
                    'Subscription.nextBilledAt': new Date(subscription.current_period_end * 1000),
                    'Subscription.status': subscription.status === 'active' ? 'active' : 'pastDue',
                },
            },
            {new: true}
        );
    }

    async cancelSubscription(subscription) {
        return Payment.findOneAndUpdate(
            {'Subscription.packageId': subscription.metadata?.packageId},
            {
                $set: {
                    'Subscription.status': 'canceled',
                    'Subscription.endDate': new Date(),
                },
            },
            {new: true}
        );
    }
}

const paymentsRepository = new PaymentsRepository();

export default paymentsRepository;
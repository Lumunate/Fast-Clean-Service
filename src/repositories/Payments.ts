// repositories/PaymentsRepository.js
import Payment from '../models/Payments';

class PaymentsRepository {
    async savePayment(session) {
        console.log('savePayment 123 bug', session);

        const userId = session.metadata.userId;
        const update = {
            $push: {
                oneTimePayment: {
                    date: new Date(),
                    price: session.amount_total / 100,
                    packageId: session.metadata?.packageId,
                    status: 'Paid',
                }
            }
        };

        const payment = await Payment.findOneAndUpdate(
            { userId },
            update,
            { upsert: true, new: true } // create if doesn't exist
        );

        return payment;
    }


    async saveSubscription(subscription) {
        const userId = subscription.client_reference_id;
        const update = {
            $set: {
                Subscription: {
                    billingCycle: subscription.plan.interval === 'month' ? 'monthly' : 'yearly',
                    status: subscription.status === 'paid' ? 'active' : 'pastDue',
                    paymentMethod: 'stripe',
                    packageId: subscription.metadata?.packageId,
                    nextBilledAt: new Date(subscription.current_period_end * 1000),
                    startDate: new Date(subscription.current_period_start * 1000),
                    endDate: null,
                }
            }
        };

        const payment = await Payment.findOneAndUpdate(
            { userId },
            update,
            { upsert: true, new: true }
        );

        return payment;
    }


    async handleSubscriptionPayment(invoice) {
        const subscription = invoice.subscription;

        return Payment.findOneAndUpdate(
            { userId: subscription.metadata.userId },
            {
                $set: {
                    'Subscription.nextBilledAt': new Date(subscription.current_period_end * 1000),
                    'Subscription.status': subscription.status === 'active' ? 'active' : 'pastDue',
                }
            },
            { new: true }
        );
    }


    async cancelSubscription(subscription) {
        return Payment.findOneAndUpdate(
            { userId: subscription.metadata.userId },
            {
                $set: {
                    'Subscription.status': 'canceled',
                    'Subscription.endDate': new Date(),
                }
            },
            { new: true }
        );
    }

}

const paymentsRepository = new PaymentsRepository();

export default paymentsRepository;
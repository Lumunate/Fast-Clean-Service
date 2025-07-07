import paymentsRepository from "../repositories/Payments";
import Booking from "../models/Booking";

class PaymentsServices {
    async savePaymentToDatabase(session) {
        return await paymentsRepository.savePayment(session);
    }

    async saveSubscriptionToDatabase(subscription) {
        return await paymentsRepository.saveSubscription(subscription);
    }

    async handleSubscriptionPayment(invoice) {
        return await paymentsRepository.handleSubscriptionPayment(invoice);
    }

    async cancelSubscriptionInDatabase(subscription) {
        return await paymentsRepository.cancelSubscription(subscription);
    }

    async saveCoinbaseChargeToDatabase(chargeData: any) {
        // Persist in your payments collection
        await paymentsRepository.saveCoinbaseCharge(chargeData);

        // Mirror what Stripe does: update the embedded booking.payment sub-doc
        const bookingId = chargeData.metadata.bookingId;
        if (bookingId) {
            await Booking.findByIdAndUpdate(bookingId, {
                payment: {
                    provider: 'coinbase',
                    sessionId: chargeData.code,
                    status: 'PENDING',
                    lastUpdated: new Date(),
                }
            });
        }
    }

    /** Handle a confirmed Coinbase webhook event */
    async handleCoinbaseWebhook(event: any) {
        if (event.event.type === 'charge:confirmed') {
            const data = event.event.data;
            // persist in payments collection
            await paymentsRepository.saveCoinbaseCharge(data);
            // update booking
            const bookingId = data.metadata.bookingId;
            if (bookingId) {
                await Booking.findByIdAndUpdate(bookingId, {
                    payment: {
                        provider: 'coinbase',
                        sessionId: data.code,
                        status: 'PAID',
                        lastUpdated: new Date(),
                    }
                });
            }
        }
    }
}

const paymentsServices = new PaymentsServices();
export default paymentsServices;
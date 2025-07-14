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
        await paymentsRepository.saveCoinbaseCharge(chargeData);

        const bookingId = chargeData.data.metadata.bookingId;
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

    async handleCoinbaseWebhook(event: any) {
        if (event.event.type === 'charge:confirmed') {
            const chargeData = event.event.data;
            await paymentsRepository.saveCoinbaseCharge(chargeData);
            const bookingId = chargeData.data.metadata.bookingId;
            if (bookingId) {
                await Booking.findByIdAndUpdate(bookingId, {
                    payment: {
                        provider: 'coinbase',
                        sessionId: chargeData.data.code,
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
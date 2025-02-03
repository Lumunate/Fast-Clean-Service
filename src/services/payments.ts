import paymentsRepository from "../repositories/Payments";

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
}

const paymentsServices = new PaymentsServices();
export default paymentsServices;
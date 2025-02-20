import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: [
        '/',
        '/(de|en)/:path*',
        '/aboutus',
        '/admin/:path*',
        '/autocare',
        '/booking',
        '/contact',
        '/customer-portal/:path*',
        '/feedback',
        '/fleet',
        '/other-vehicles',
        '/privacy-policy',
        '/services',
        '/subscribe',
        '/terms-and-conditions'
    ]
};
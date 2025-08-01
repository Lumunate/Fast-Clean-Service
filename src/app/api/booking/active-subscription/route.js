import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import Payment from '../../../../models/Payments';

export async function GET(request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const userId = session.user.id;
    const hasActive = await Payment.exists({
        userId,
        'Subscription.status': 'active',
    });

    return NextResponse.json({ hasActiveSubscription: Boolean(hasActive) });
}

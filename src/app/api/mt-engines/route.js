// /src/app/api/mt-engines/route.js
import { NextResponse } from 'next/server';

const CROWDIN_TOKEN    = process.env.CROWDIN_TOKEN;
const CROWDIN_API_BASE = process.env.CROWDIN_API_BASE || 'https://api.crowdin.com/api/v2';

export async function GET() {
    if (!CROWDIN_TOKEN) {
        console.error('🔑 Missing CROWDIN_TOKEN in env');
        return NextResponse.json(
            { error: 'Server misconfiguration: missing CROWDIN_TOKEN' },
            { status: 500 }
        );
    }

    let res;
    try {
        res = await fetch(`${CROWDIN_API_BASE}/mts`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${CROWDIN_TOKEN}`
            }
        });
    } catch (networkErr) {
        console.error('🌐 Network error fetching MT engines:', networkErr);
        return NextResponse.json(
            { error: 'Network error contacting Crowdin' },
            { status: 502 }
        );
    }

    if (!res.ok) {
        const body = await res.text();
        console.error('📋 Crowdin API error:', res.status, body);
        return NextResponse.json(
            { error: 'Crowdin API error', details: body },
            { status: res.status }
        );
    }

    const json = await res.json();
    // json.data is an array of MT engine objects
    return NextResponse.json(json);
}

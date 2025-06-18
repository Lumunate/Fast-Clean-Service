import { NextResponse } from 'next/server';

const CROWDIN_TOKEN = process.env.CROWDIN_TOKEN;
const CROWDIN_MT_ID  = process.env.CROWDIN_MT_ID;
const BASE_URL       = process.env.CROWDIN_API_BASE;

export async function POST(request) {
    const { textArray, targetLang } = await request.json();

    // if no work, bail
    if (!Array.isArray(textArray) || textArray.length === 0) {
        return NextResponse.json({ translations: [] });
    }

    // call Crowdin MT endpoint
    const resp = await fetch(
        `${BASE_URL}/mts/${CROWDIN_MT_ID}/translations`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${CROWDIN_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                languageRecognitionProvider: 'crowdin',
                targetLanguageId: targetLang,
                strings: textArray
            })
        }
    );

    if (!resp.ok) {
        console.error('Crowdin error', await resp.text());
        return NextResponse.json(
            { translations: [] },
            { status: 502 }
        );
    }

    const { data } = await resp.json();
    // data.translations is an array of {text, translation}
    return NextResponse.json({
        translations: data.translations.map(t => t.text) // or .translation
    });
}

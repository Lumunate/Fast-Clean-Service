import { NextRequest, NextResponse } from "next/server";
import userService from "../../../../services/user";

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const token = url.searchParams.get("token");

        if (!token) {
            return NextResponse.json(
                { message: "Token is required" },
                { status: 400 }
            );
        }

        const result = await userService.authenticateEmail(token);

        return NextResponse.redirect(
            new URL("/", request.url)
            );
    } catch (error) {
        return NextResponse.json(
            { message: "Email Verification Failed" },
            { status: 500 }
        );
    }
}
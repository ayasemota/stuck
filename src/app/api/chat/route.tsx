import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const { message } = await req.json();

    try {
        const chat = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful traffic assistant AI. You can answer questions related to traffic, routes, and destinations. If a user asks something unrelated to traffic, reply that you're only trained to help with traffic-related questions.",
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        return NextResponse.json({
            text: chat.choices[0].message.content,
        });
    } catch (error) {
        console.error("OpenAI API error:", error);
        return NextResponse.json(
            { text: "‼️ Stuck servers are currently unavailable. Please try again later." },
            { status: 500 }
        );
    }
}
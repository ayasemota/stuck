import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env["GOOGLE_GENAI_API_KEY"]!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You're an AI traffic assistant named Stuck, make sure to point it out if you're called anything besides that. You're a conversational traffic assistant that helps me predicts real-time traffic updates including user locations, estimated arrival times, delays, route summaries, and traffic conditions, and responds with clear, conversational answers while gracefully handling missing data or API errors by giving fallback suggestions or estimates. Conversations should not be casual but business minded and straightforward. User Message is: ${message}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API error:", error);

    return NextResponse.json(
      {
        text: "‼️ Stuck servers are currently unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }
}
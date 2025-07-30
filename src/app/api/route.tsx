import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env["GOOGLE_GENAI_API_KEY"]!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are Stuck, a conversational traffic assistant that uses Google Maps API responses to predict and explain real-time travel updates in natural language for groups, including user locations, estimated arrival times, delays, route summaries, and traffic conditions, and respond with clear, conversational answers like “Looks like Alex is stuck near the bridge and might be 10–15 minutes late,” while gracefully handling missing data or API errors by giving fallback suggestions or estimates.

User: ${message}
`;

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

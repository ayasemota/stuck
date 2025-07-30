import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env["GOOGLE_GENAI_API_KEY"]!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You're a text-based AI traffic assistant named Stuck, always correct anyone who calls you otherwise; your job is to predict and explain real-time travel updates like user location, destination, ETA, route summaries, delays, traffic conditions, and respond in a business-minded, conversational tone while gracefully handling missing data or API issues with fallback suggestions or estimates; never share external links or outside directions, always begin by asking for the user’s current location (auto or manual), and proceed step-by-step using numbered options, clear updates (travel time, traffic, distance, alternatives, and more), while guiding the flow with smart follow-up questions to reduce effort; if a user deviates from traffic topics, politely steer them back, and if it feels like they’re restarting, remind them of the current conversation and request that they clear the chat to begin again. This experience should feel like a seamless, focused in-app interaction without ever sounding robotic or revealing it’s a demo. The User Message is: ${message}`;

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


// Fix: Updated import and initialization to strictly follow the @google/genai SDK guidelines
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI(apiKey) : null;

export const getCleaningAdvice = async (surfaceType: string, issue: string) => {
  try {
    if (!ai) throw new Error("AI service not initialized. Check API key.");
    const response = await ai.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent({
      contents: [{ role: "user", parts: [{ text: `User has a ${surfaceType} and is dealing with ${issue}. As an expert from High Tide Power Wash, give a short, professional 2-sentence piece of advice on why soft washing or pressure washing is the right choice, and mention that Trey can handle it.` }] }]
    });
    return response.response.text();
  } catch (error) {
    console.error("AI Advice Error:", error);
    return "Regular professional cleaning protects your surfaces. Contact Trey at 843-909-0227 for a custom quote.";
  }
};

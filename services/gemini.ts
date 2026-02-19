
// Fix: Updated import and initialization to strictly follow the @google/genai SDK guidelines
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCleaningAdvice = async (surfaceType: string, issue: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User has a ${surfaceType} and is dealing with ${issue}. As an expert from High Tide Power Wash, give a short, professional 2-sentence piece of advice on why soft washing or pressure washing is the right choice, and mention that Trey can handle it.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    // Fix: Access the text property directly (not a method call) as per the SDK response object definition
    return response.text;
  } catch (error) {
    console.error("AI Advice Error:", error);
    return "Regular professional cleaning protects your surfaces. Contact Trey at 843-909-0227 for a custom quote.";
  }
};

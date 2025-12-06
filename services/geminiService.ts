import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
}

export const generateArtistAdvice = async (prompt: string): Promise<string> => {
  if (!ai) {
    console.warn("API Key not found");
    return "Para usar el asistente, necesitas configurar la API Key en Vercel.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `Eres "Heavy Assistant", un experto en la industria musical virtual para la plataforma de distribución "Heavy Music". 
        Tu tono es joven, motivador, urbano y profesional.
        Ayudas a artistas independientes con consejos sobre:
        1. Estrategias de lanzamiento en Spotify/Apple Music.
        2. Ideas para redes sociales (TikTok, Instagram).
        3. Redacción de pitchs para playlists.
        4. Dudas sobre derechos de autor y licencias.
        
        Mantén las respuestas concisas (máximo 150 palabras) y usa emojis relevantes. Habla siempre en español.`,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, no pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error al conectar con el asistente. Inténtalo de nuevo.";
  }
};
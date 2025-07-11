import { GoogleGenAI } from "@google/genai";

const gemini_api_key = process.env.GEMINI_API_KEY

const ai = new GoogleGenAI({ apiKey: gemini_api_key });

const atsAnalyeser = async (pdf_url:string, prompt: string) => {
    const pdfResp = await fetch(pdf_url)
        .then((response) => response.arrayBuffer());

    const contents = [
        { text: prompt },
        {
            inlineData: {
                mimeType: 'application/pdf',
                data: Buffer.from(pdfResp).toString("base64")
            }
        }
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents
    });
    // console.log(response);
    return response.text;
}

export default atsAnalyeser
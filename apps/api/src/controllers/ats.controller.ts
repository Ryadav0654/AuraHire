import { Request, Response, urlencoded } from "express"
import atsAnalyzerPrompt from "../ai/prompts/atsAnayzerPrompt";

import atsAnalyeser from "../ai/gemini";

export const getResumeAtsResponse = async (req: Request, res: Response) => {
    try {
        const { jobDescription, resume_url } = req.body;

        if (!jobDescription || !resume_url) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        // TODO: Add ATS logic here
        const response = await atsAnalyeser(resume_url, atsAnalyzerPrompt(jobDescription)); 
        if(!response){
            res.status(404).json({ message: "Error while sending ATS response" });
            return;
        }
        res.status(200).json({ message: "ATS response sent successfully", report: response });
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}
import { Request, Response } from "express";
import feedbackModel from "@repo/db/feedbackModel";
const feedbackController = async (req: Request, res: Response) => {
    try {
        const {name, email, message} = req.body;

        if(!name || !email || !message){
            res.status(400).json({message: "All fields are required"})
            return ;
        }
        
        const feedback = await feedbackModel.create({
            name,
            email,
            message
        });

        if(!feedback){
            res.status(404).json({message: "Error while creating feedback"})
            return ;
        }

        res.status(201).json({message: "Feedback submitted successfully", feedback})
        return ;
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Internal server error", error})
        return ;
        
    }
}

const getFeedback  = async (req: Request, res: Response) => {
    try {
        const feedbacks = await feedbackModel.find();

        if(!feedbacks){
            res.status(404).json({message: "No feedback found"})
            return ;
        }

        res.status(200).json({message: "Feedback fetched successfully", feedbacks})
        return ;
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Internal server error", error})
        return ;
        
    }
}

export {feedbackController, getFeedback};
import { Request, Response } from "express";
import { conversationService } from "./conversation.service";
import { SenderType } from "../../../generated/prisma/enums";

export const getConversations = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        if(!userId) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized, user id not found"
            })
        }
        const conversations = await conversationService.getUserConversation(userId);
        res.status(200).json({
            success: true,
            data: conversations
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getConversationById = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        if(!userId) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized, user id not found"
            })
        }

        const id = req.params.id as string

        const conversation = await conversationService.getConversationDetail(id, userId);

        res.status(200).json({
            success: true,
            data: conversation
        });

    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
}

export const createConversation = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        if(!userId) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized, user id not found"
            })
        }

        const { title } = req.body;
        const conversation = await conversationService.createNewConversation(userId, title);
        res.status(201).json({
            success: true,
            data: conversation
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        if(!userId) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized, user id not found"
            })
        }

        const id = req.params.id as string;
        const { senderType, content } = req.body

        const message = await conversationService.addMessage(
            id,
            userId,
            senderType as SenderType,
            content
        );

        res.status(201).json({
            success: true,
            data: message
        });
    } catch (error: any) {
        if(error.message.startsWith('BAD_REQUEST')) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


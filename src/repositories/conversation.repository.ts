import prisma from "../config/prisma";
import { SenderType } from "../../generated/prisma/enums";
import { timeStamp } from "node:console";

export class ConversationRepository {
    async findUserById(userId: string) {
        return await prisma.conversation.findMany({
            where: { userId },
            include: {
                messages: {
                    take: 1,
                    orderBy: { timestamp: 'desc'},
                },
            },
            orderBy: { updatedAt: 'desc' },
        });
    }

    async findById(id: string) {
        return await prisma.conversation.findUnique({
            where: { id },
            include: {
                messages: {
                    orderBy: { timestamp: 'asc' },
                },
            },
        });
    }

    async create(userId: string, title: string) {
        return await prisma.conversation.create({
            data: {
                userId,
                title: title || 'Percakapan Baru',
            },
        });
    }

    async createMessage(conversationId: string, senderType: SenderType, content: string) {
        return await prisma.message.create({
            data: {
                conversationId,
                senderType,
                content,
            },
        });
    }

    async updateTimestamp(conversationId: string) {
        return await prisma.conversation.update({
            where: { id: conversationId },
            data: {
                updatedAt: new Date()
            },
        });
    }
}

export const conversationRepository = new ConversationRepository();
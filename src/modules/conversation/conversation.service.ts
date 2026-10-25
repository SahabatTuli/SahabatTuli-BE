import { conversationRepository } from "./conversation.repository";
import { SenderType } from "../../../generated/prisma/enums";

export class ConversationService {
    async getUserConversation(userId: string) {
        return await conversationRepository.findUserById(userId);
    }

    async getConversationDetail(conversationId: string, userId: string) {
        const conversation = await conversationRepository.findById(conversationId);

        if(!conversation) {
            throw new Error('Conversation not found');
        }

        return conversation;
    }

    async createNewConversation(userId: string, title: string) {
        return await conversationRepository.create(userId, title);
    }

    async addMessage(
        conversationId: string,
        userId: string,
        senderType: SenderType,
        content: string
    ) {
        if(!content) {
            throw new Error(`BAD_REQUEST: Text can't be empty`);
        }

        await this.getConversationDetail(conversationId, userId);

        const newMessage = await conversationRepository.createMessage(
            conversationId,
            senderType,
            content
        );

        await conversationRepository.updateTimestamp(conversationId);

        return newMessage;
    }
}

export const conversationService = new ConversationService();
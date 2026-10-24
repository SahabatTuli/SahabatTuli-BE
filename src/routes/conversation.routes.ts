import { Router } from "express";
import { getConversations, getConversationById, createConversation, sendMessage } from "../controllers/conversation.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

router.use(requireAuth);
router.get('/', getConversations);

export default router;
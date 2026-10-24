import { Router } from "express";
import { getConversations, getConversationById, createConversation, sendMessage } from "../controllers/conversation.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

router.use(requireAuth);
/**
 * @openapi
 * /api/conversations:
 *   get:
 *     summary: Mengambil semua daftar percakapan
 *     tags: [Conversations]
 *     responses:
 *       200:
 *         description: Berhasil mengambil daftar percakapan
 *       401:
 *         description: Unauthorized
 *   post:
 *     summary: Membuat percakapan baru
 *     tags: [Conversations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Diskusi Proyek"
 *     responses:
 *       201:
 *         description: Percakapan berhasil dibuat
 */
router.get('/', getConversations);
router.post('/', createConversation);

/**
 * @openapi
 * /api/conversations/{id}:
 *   get:
 *     summary: Mengambil detail percakapan berdasarkan ID
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detail percakapan ditemukan
 *       404:
 *         description: Percakapan tidak ditemukan
 */
router.get('/:id', getConversationById);

/**
 * @openapi
 * /api/conversations/{id}/messages:
 *   post:
 *     summary: Mengirim pesan baru
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - senderType
 *               - content
 *             properties:
 *               senderType:
 *                 type: string
 *                 example: "USER"
 *               content:
 *                 type: string
 *                 example: "Halo"
 *     responses:
 *       201:
 *         description: Pesan berhasil dikirim
 */
router.post('/:id/messages', sendMessage);

export default router;
import { Router } from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '../../lib/auth.js';

const router = Router();

/**
 * @openapi
 * /api/auth/sign-in/email:
 *   post:
 *     summary: Login Email (Better Auth)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Berhasil login
 */

// Better Auth Handler
router.all('/*splat', toNodeHandler(auth));

export default router;
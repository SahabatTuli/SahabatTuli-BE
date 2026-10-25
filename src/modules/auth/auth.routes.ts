import { Router } from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '../../lib/auth.js';

const router = Router();

/**
 * @openapi
 * /api/auth/sign-up/email:
 *   post:
 *     summary: Register Akun Baru
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Budi Santoso"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "budi@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "budi12345"
 *     responses:
 *       200:
 *         description: Berhasil mendaftar dan membuat sesi baru
 *       400:
 *         description: Email sudah terdaftar atau input tidak valid
 *
 * /api/auth/sign-in/email:
 *   post:
 *     summary: Login dengan Email & Password
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
 *                 format: email
 *                 example: "budi@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "budi12345"
 *     responses:
 *       200:
 *         description: Berhasil login
 *       401:
 *         description: Email atau password salah
 *
 * /api/auth/sign-out:
 *   post:
 *     summary: Logout (Menghapus Sesi)
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Berhasil logout
 *
 * /api/auth/get-session:
 *   get:
 *     summary: Mendapatkan Detail Sesi Aktif
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data user dan sesi aktif
 *       401:
 *         description: Belum terautentikasi / sesi tidak valid
 * /api/auth/sign-in/social:
 *   post:
 *     summary: Login via Google OAuth
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [provider]
 *             properties:
 *               provider:
 *                 type: string
 *                 enum: [google]
 *                 example: "google"
 *               callbackURL:
 *                 type: string
 *                 example: "http://localhost:3000/docs"
 *     responses:
 *       200:
 *         description: Mengembalikan URL redirect ke halaman login Google
 */

// Better Auth Handler (menangani semua endpoint /api/auth/*)
router.all('/*splat', toNodeHandler(auth));

export default router;
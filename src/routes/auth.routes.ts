/**
 * @openapi
 * tags:
 *   name: Authentication
 *   description: Endpoint autentikasi Better Auth
 */

/**
 * @openapi
 * /api/auth/sign-in/email:
 *   post:
 *     summary: Login dengan Email dan Password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login berhasil
 *       400:
 *         description: Email atau password salah
 */

/**
 * @openapi
 * /api/auth/sign-up/email:
 *   post:
 *     summary: Registrasi Akun Baru dengan Email
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Registrasi berhasil
 */

/**
 * @openapi
 * /api/auth/sign-out:
 *   post:
 *     summary: Logout dari sesi saat ini
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Berhasil logout
 */
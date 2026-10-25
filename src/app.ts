import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from "express";
import swaggerUi from 'swagger-ui-express';
import { toNodeHandler } from "better-auth/node";
import { swaggerSpec } from "./swagger";
import conversationRoutes from './modules/conversation/conversation.routes';
import { auth } from "./lib/auth";

const app = express();

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/conversations', conversationRoutes);

export default app;
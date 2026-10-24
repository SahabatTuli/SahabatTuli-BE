import express, { Request, Response } from "express";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from "./swagger";
import conversationRoutes from './routes/conversation.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
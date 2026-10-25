import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SahabatTuli API Docs',
      version: '1.0.0',
      description: 'SahabatTuli API using Express + TypeScript + Prisma v7',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  // Memindai seluruh anotasi JSDoc di dalam folder routes
  apis: ['./src/modules/**/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
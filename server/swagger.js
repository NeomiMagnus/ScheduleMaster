const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'ScheduleMaster API',
    version: '1.0.0',
    description: 'My ScheduleMaster project\'s APIs',
  },
  paths: {
    '/api/tasks': {
      post: {
        summary: 'Create a new task',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' },
                  importanceLevel: { type: 'integer' },
                },
                required: ['title', 'importanceLevel'],
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Task created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
          500: {
            description: 'Invalid input data',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
  },
  '/api/tasks/{id}': {
    get: {
      summary: 'Get all tasks by parameters',
      parameters: [
        {
          name: 'title',
          in: 'path',
          required: false,
          schema: {
            type: 'string',
          },
        },
        {
          name: 'title',
          in: 'path',
          required: false,
          schema: {
            type: 'string',
          },
        },
        {
            title, description, finished, importanceLevel
        }
      ],
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  finished: { type: 'boolean' },
                  importanceLevel: { type: 'integer' },
                },
              },
            },
          },
        },
        404: {
          description: 'Task not found',
        },
      },
    },
  },
}
}

module.exports = swaggerDefinition;
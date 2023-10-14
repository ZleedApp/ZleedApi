const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json( {
    swagger: '2.0',
    info: {
      description: 'A free and open-source streaming platform.',
      version: '1.0.0-alpha',
      title: 'Zleed API',
      termsOfService: 'https://zleed.tv/legal/tos',
      contact: {
        email: 'info@zleed.tv'
      },
      license: {
        name: 'GPL-3.0',
        url: 'https://github.com/ZleedApp/ZleedApi/blob/main/LICENSE'
      }
    },
    host: 'api.zleed.tv',
    basePath: '/v1',
    schemes: [
      'https'
    ],
    paths: {
      '/register': {
        post: {
          summary: 'Register a new user',
          description: 'Register a new user',
          operationId: 'register',
          consumes: [
            'application/json'
          ],
          produces: [
            'application/json'
          ],
          parameters: [
            {
              name: 'body',
              in: 'body',
              required: true,
              schema: {
                $ref: '#/definitions/Register'
              }
            }
          ],
          responses: {
            200: {
              description: 'OK',
              schema: {
                $ref: '#/definitions/RegisterSuccessResponse'
              }
            }
          }
        }
      }
    },
    definitions: {
      Register: {
        type: 'object',
        properties: {
          username: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      RegisterSuccessResponse: {
        type: 'object',
        properties: {
          error: {
            type: 'number'
          },
          code: {
            type: 'string'
          }
        }
      }
    },
    externalDocs: {
      url: 'https://docs.zleed.tv',
      description: 'Offical Zleed Docs'
    }
  });
});

module.exports = router;
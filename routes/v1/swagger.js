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
    externalDocs: {
      url: 'https://docs.zleed.tv',
      description: 'Offical Zleed Docs'
    }
  });
});

module.exports = router;
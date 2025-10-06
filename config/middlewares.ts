export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        // 'https://seu-frontend-render.com', // URL do seu frontend
        'http://localhost:3000', // URL do seu frontend local (em desenvolvimento)
      ],
      headers: ['Content-Type', 'Authorization', 'X-Requested-With'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

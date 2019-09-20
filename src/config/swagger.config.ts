const PORT = process.env.PORT || 3000;
const options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Platoon-web API',
      description: 'proxy server api for platoon-desktop team',
      version: '1.0.0'
    },
    host: `localhost:${PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};

export default options;

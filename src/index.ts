import * as Fastify from 'fastify';
import * as FastifyStatic from 'fastify-static';
import * as FastifyUrlData from 'fastify-url-data';
import * as FastifyBoom from 'fastify-boom';
import * as FastifySwagger from 'fastify-swagger';
import * as FastifyCors from 'fastify-cors';
import * as FastifyFileUpload from 'fastify-file-upload';
import { APP_DIRS } from './config/path.config';
import { join } from 'path';
import options from './config/swagger.config';
import normalizeHeaders from './decorators/request/normolize';
import getFile from './decorators/request/getFiles';
import { AppRoutes } from './routes';
import AppSchemas from './schemas';

const PORT = (process.env.PORT || 3000) as number;

export async function start(port: number, client: string) {
  const App = Fastify({
    logger: false,
    ignoreTrailingSlash: true
  })
    .register(FastifyBoom)
    .register(FastifyCors, {
      origin: '*',
      allowedHeaders: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
    })
    .register(FastifySwagger, options)
    .register(FastifyUrlData)
    .register(FastifyStatic, {
      root: client
    })
    .register(FastifyFileUpload, {
      useTempFiles: true,
      tempFileDir: APP_DIRS.getStoreTemp()
    })
    .decorateRequest('getFile', getFile)
    .decorateRequest('normalize', normalizeHeaders);

  try{
    AppSchemas.forEach(schema => App.addSchema(schema));
    AppRoutes.forEach(route => {
      App.route(route)
    });
    // set route for frontend app
    App.setNotFoundHandler((req, res) => res.sendFile('index.html'));

    await App.listen(port);
  } catch (err) {
    App.log.error(err);
    process.exit(1);
  }
}

if (!module.parent) {
  const clientAppDir = join(__dirname, 'public');
  start(PORT, clientAppDir);
}

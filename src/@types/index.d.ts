import { FastifyRequest } from 'fastify';
import { DefaultHeaders } from 'fastify';
import { IncomingMessage } from 'http';

export interface ReceivedFile {
  data: Buffer;
  encoding: string;
  md5: string;
  mimetype: string;
  name: string;
  size: number;
  tempFilePath: string;
  truncated: boolean;

  mv(filePath: string, callback: (err) => void);
}

declare module 'fastify' {
  export interface FastifyRequest<HttpRequest = IncomingMessage> {
    getFile(): { bin: ReceivedFile; peaks: string };

    normalize(): DefaultHeaders;
  }
}

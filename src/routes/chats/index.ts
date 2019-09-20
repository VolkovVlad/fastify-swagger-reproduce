import { RouteOptions } from 'fastify';
import {
  GetChatsSchema,
  SaveMessageSchema
} from './chats.schemas';

export const GetChats: RouteOptions = {
  method: 'GET',
  url: '/api/chats',
  schema: GetChatsSchema,
  handler: () => {}
};

export const CreateMessage: RouteOptions = {
  method: 'PUT',
  url: '/api/chats/:chatId/messages',
  schema: SaveMessageSchema,
  handler: () => {}
};

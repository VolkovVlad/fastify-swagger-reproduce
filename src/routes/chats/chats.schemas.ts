import { RouteSchema } from 'fastify';
import { COMMON_SCHEMAS_PATH, REQUEST_ERROR_SCHEMAS_PATH } from '../../schemas';

export const GetChatsSchema: RouteSchema = {
  headers: {
    type: 'object',
    properties: {
      'x-authorization-provider': { type: 'string' },
      authorization: { type: 'string' },
      'x-session-id': { type: 'string' },
      'x-user-id': { type: 'string' }
    },
    required: ['x-authorization-provider', 'authorization', 'x-session-id', 'x-user-id']
  },
  querystring: {
    type: 'object',
    properties: {
      limit: { type: 'number' },
      offset: { type: 'number' },
      search: { type: 'string' }
    }
  },
  description: 'Getting chats for current user',
  tags: ['Chats'],
  response: {
    200: {
      title: 'Getting chats for current user',
      description: 'Successful response',
      type: 'object',
      properties: {
        total: { type: 'number' },
        offset: { type: 'number' },
        items: {
          type: 'array',
          items: {
            // This schema is fine, has no errors, 'cause there is a wrapper
            $ref: `${COMMON_SCHEMAS_PATH}/CommonDialogModel`
          }
        }
      }
    }
  }
};

export const SaveMessageSchema: RouteSchema = {
  headers: {
    type: 'object',
    properties: {
      'x-authorization-provider': { type: 'string' },
      authorization: { type: 'string' },
      'x-session-id': { type: 'string' },
      'x-user-id': { type: 'string' }
    },
    required: ['x-authorization-provider', 'authorization', 'x-session-id', 'x-user-id']
  },
  body: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          message: {
            // But this one is broken for some reason ["Could not resolve reference: undefined undefined"]
            $ref: `${COMMON_SCHEMAS_PATH}/CommonMessageModel`
          },
          chat: {
            // same: ["Could not resolve reference: undefined undefined"]
            $ref: `${COMMON_SCHEMAS_PATH}/CommonDialogModel`
          },
          ownerPhoneNumber: { type: 'string' },
          recipients: {
            type: 'array',
            items: { type: 'string' }
          }
        },
        required: ['message', 'chat', 'ownerPhoneNumber', 'recipients']
      }
    },
  },
  description: 'Save chat message',
  tags: ['Chats'],
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        uuid: { type: 'string' },
        status: { type: 'string' },
        createdAt: { type: 'string' }
      }
    },
    400: {
      $ref: `${REQUEST_ERROR_SCHEMAS_PATH}/400`
    }
  }
};

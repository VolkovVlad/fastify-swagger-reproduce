import { RouteSchema } from 'fastify';
import { COMMON_SCHEMAS_PATH, REQUEST_ERROR_SCHEMAS_PATH } from '../../schemas';

export const AuthUserBrokenSchema: RouteSchema = {
  headers: {
    type: 'object',
    properties: {
      'x-authorization-provider': { type: 'string' },
      authorization: { type: 'string' }
    },
    required: ['x-authorization-provider', 'authorization']
  },
  description: 'Getting current user profile',
  tags: ['Auth'],
  response: {
    200: {
      // if I'm trying to use ref inside of the 200 -> that is "Could not resolve reference: undefined undefined"
      $ref: `${COMMON_SCHEMAS_PATH}/CommonAuthModel`
    },
    400: {
      $ref: `${REQUEST_ERROR_SCHEMAS_PATH}/400`
    }
  }
};

export const AuthUserSchema: RouteSchema = {
  headers: {
    type: 'object',
    properties: {
      'x-authorization-provider': { type: 'string' },
      authorization: { type: 'string' }
    },
    required: ['x-authorization-provider', 'authorization']
  },
  description: 'Getting current user profile',
  tags: ['Auth'],
  response: {
    200: {
      type: 'object',
      properties: {
        userSource: {
          // But if I wrapped it in other property, it works well
          $ref: `${COMMON_SCHEMAS_PATH}/CommonAuthModel`
        }
      }
    }
  }
};

import { RouteOptions } from 'fastify';
import { AuthUserSchema, AuthUserBrokenSchema} from './auth.schemas';

export const AuthUser: RouteOptions = {
  method: 'GET',
  url: '/api/auth',
  schema: AuthUserSchema,
  handler: () => {}
};

export const AuthUserBroken: RouteOptions = {
  method: 'GET',
  url: '/api/auth-broken',
  schema: AuthUserBrokenSchema,
  handler: () => {}
};

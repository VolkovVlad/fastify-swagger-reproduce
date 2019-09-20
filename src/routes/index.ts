import * as AuthRoutes from './auth';
import * as ChatRoutes from './chats';

export const AppRoutes = [
  ...Object.values(AuthRoutes),
  ...Object.values(ChatRoutes),
];

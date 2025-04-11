// src/decorators/user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserContext } from '../types/UserContext';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserContext => {
    const request= ctx.switchToHttp().getRequest();
    return request.user; // Returns { userId, username } from JWT
  },
);
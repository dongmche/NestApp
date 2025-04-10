// src/auth/auth.service.ts
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { ResponseUserDto } from '../users/dto/response-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<ResponseUserDto | null> {
    return await this.userService.authenticateUser(username, password);
  }

  async login(user: ResponseUserDto): Promise<{ access_token: string }> {
    const payload = { username: user.username, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

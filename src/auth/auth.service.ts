// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/models/users/entities/user.entity';
import { UsersService } from 'src/models/users/users.service';

@Injectable()
export class AuthService {

  
  constructor(private jwtService: JwtService, 
    private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user: UserEntity = await this.usersService.getByName(username);


    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

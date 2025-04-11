// root-admin.service.ts
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from '../../models/users/dto/create-user.dto';
import { ResponseUserDto } from '../../models/users/dto/response-user.dto';
import { UserService } from '../../models/users/user.service';
import { ConfigService } from '@nestjs/config';
import { hashPassword } from '../../utils/hash.utils';

// basic service if creating a root user during app startApp is necessary just hardcoded it later will be modified

@Injectable()
export class RootAdminService implements OnModuleInit {
  constructor(
    private readonly usersService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async onModuleInit() {
    await this.createRootAdmin();
  }

  private readonly logger = new Logger(RootAdminService.name);

  private async createRootAdmin() {
    const admin: CreateUserDto = new CreateUserDto();
    admin.username =
      this.configService.get<string>('ADMIN_USERNAME') || 'admin';
    const plainPassword: string =
      this.configService.get<string>('ADMIN_PASSWORD') || 'admin';
    admin.password = await hashPassword(plainPassword);

    try {
      const existingAdmin: ResponseUserDto =
        await this.usersService.create(admin);
      this.logger.log('Admin user created successfully.');
    } catch (error) {
      this.logger.warn(
        'most likely admin user already exists, So admin user is not created',
      );
    }
  }
}

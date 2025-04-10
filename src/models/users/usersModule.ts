import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersController } from './usersController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/userEntity';
import { UserMapper } from './mapper/user-mapper.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UserService, UserMapper],
  exports: [UserService, UserMapper],
})
export class UsersModule {}

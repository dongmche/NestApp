import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { LocalAuthGuard } from 'src/auth/auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }


  @UseGuards(JwtAuthGuard)
  @Get('test')
  test() {
    return "test success";
  }
  
  @Get('unprotected')
  testUnProtected() {
    return "test success";
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('getByName/:name')
  async getByName(@Param('name') name: string) {
    if (!name) {
      throw new BadRequestException('Name parameter is required');
    }
    
    const user = await this.usersService.getByName(name);
    
    if (!user) {
      throw new NotFoundException(`User with name ${name} not found`);
    }
  
    return user;
  }
  


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  
 
}

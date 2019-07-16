import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from '@@server/types';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): User {
    return this.userService.getUser();
  }

  @Post('login')
  login(@Body() body: { id?: string; password?: string }): User {
    console.log('body', body);
    const { id = '', password = '' } = body;
    return this.userService.login({ id, password });
  }
}

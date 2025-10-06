import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dtos/auth-login.dto';
import { LocalGuard } from './guards/local.guard';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @UseGuards(LocalGuard)
  login(@Body() body: AuthLoginDTO) {
    return this.authService.validateUser(body)
  }
}
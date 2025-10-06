import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDTO } from './dtos/auth-login.dto';
import { fakeUsers } from './data/fakeuser';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}

    validateUser(body: AuthLoginDTO) {
        const findUser = fakeUsers.find((user) => user.email === body.email)

        if(!findUser) throw new UnauthorizedException(`User with ${body.email} not found`)

        const matchedPassword = findUser.password === body.password

        if(!matchedPassword) throw new HttpException("Invalid Credential", 401)
        
        const { password, ...user } = findUser
        const token = this.jwtService.sign(user)

        return token            
    }
}

import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'user/strategy/user.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  providers: [PrismaService, UserService, UserResolver, JwtStrategy],
})
export class UserModule {}

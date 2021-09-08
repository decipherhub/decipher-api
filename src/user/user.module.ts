import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: 60 * 60 * 24 },
    }),
  ],
  providers: [PrismaService, UserService, UserResolver],
})
export class UserModule {}

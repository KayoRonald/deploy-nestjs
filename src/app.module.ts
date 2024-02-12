import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import configuration from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads environment variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User], // Ensure User entity is imported correctly
      synchronize: true, // Auto-create tables (disable in production)
    }),
    UsersModule, // User Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registers User entity
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Allow usage in other modules
})
export class UsersModule {}

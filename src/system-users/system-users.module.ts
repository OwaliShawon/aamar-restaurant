import { Module } from '@nestjs/common';
import { SystemUsersService } from './system-users.service';
import { SystemUsersController } from './system-users.controller';

@Module({
  controllers: [SystemUsersController],
  providers: [SystemUsersService],
})
export class SystemUsersModule {}

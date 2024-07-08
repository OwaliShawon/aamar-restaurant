import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemUsersModule } from './system-users/system-users.module';

@Module({
  imports: [SystemUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

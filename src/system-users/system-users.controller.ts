import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemUsersService } from './system-users.service';
import { CreateSystemUserDto } from './dto/create-system-user.dto';
import { UpdateSystemUserDto } from './dto/update-system-user.dto';

@Controller('system-users')
export class SystemUsersController {
  constructor(private readonly systemUsersService: SystemUsersService) {}

  @Post()
  create(@Body() createSystemUserDto: CreateSystemUserDto) {
    return this.systemUsersService.create(createSystemUserDto);
  }

  @Get()
  findAll() {
    return this.systemUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.systemUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSystemUserDto: UpdateSystemUserDto) {
    return this.systemUsersService.update(+id, updateSystemUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.systemUsersService.remove(+id);
  }
}

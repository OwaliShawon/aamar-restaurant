import { Injectable } from '@nestjs/common';
import { CreateSystemUserDto } from './dto/create-system-user.dto';
import { UpdateSystemUserDto } from './dto/update-system-user.dto';

@Injectable()
export class SystemUsersService {
  create(createSystemUserDto: CreateSystemUserDto) {
    return 'This action adds a new systemUser';
  }

  findAll() {
    return `This action returns all systemUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} systemUser`;
  }

  update(id: number, updateSystemUserDto: UpdateSystemUserDto) {
    return `This action updates a #${id} systemUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} systemUser`;
  }
}

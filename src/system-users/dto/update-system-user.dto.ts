import { PartialType } from '@nestjs/mapped-types';
import { CreateSystemUserDto } from './create-system-user.dto';

export class UpdateSystemUserDto extends PartialType(CreateSystemUserDto) {}

import { Test, TestingModule } from '@nestjs/testing';
import { SystemUsersController } from './system-users.controller';
import { SystemUsersService } from './system-users.service';

describe('SystemUsersController', () => {
  let controller: SystemUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemUsersController],
      providers: [SystemUsersService],
    }).compile();

    controller = module.get<SystemUsersController>(SystemUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

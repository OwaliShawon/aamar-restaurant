import { Test, TestingModule } from '@nestjs/testing';
import { SystemUsersService } from './system-users.service';

describe('SystemUsersService', () => {
  let service: SystemUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemUsersService],
    }).compile();

    service = module.get<SystemUsersService>(SystemUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

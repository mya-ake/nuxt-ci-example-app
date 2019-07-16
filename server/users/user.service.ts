import { Injectable } from '@nestjs/common';
import { User } from '@@server/types/models.type';
import faker from 'faker';

@Injectable()
export class UserService {
  getUser(): User {
    return {
      id: faker.random.uuid(),
      name: faker.name.findName(),
    };
  }

  login({ id }: { id: string; password: string }): User {
    return {
      id,
      name: faker.name.findName(),
      token: faker.random.alphaNumeric(64),
    };
  }
}

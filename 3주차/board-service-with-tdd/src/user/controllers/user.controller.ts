import { User } from '../domains/user';
import { UserService } from '../services/user.service';
import { UserCreateDto } from './dtos/user.create.dto';

export class UserController {
  constructor(private readonly userService: UserService) {}

  create(data: UserCreateDto): User {
    const user = this.userService.create(data.id, data.password);
    return user;
  }

  findById(id: string): User {
    const user = this.userService.findById(id);
    return user;
  }
}

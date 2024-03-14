import { User } from './User';
import { UserRepository } from './UserRepository';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(id: string, password: string): User {
    let user = User.create(id, password);
    user = this.userRepository.save(user);
    return user;
  }

  findById(id: string): User {
    let user = this.userRepository.findById(id);
    return user;
  }
}

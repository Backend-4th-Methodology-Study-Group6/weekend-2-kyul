import { User } from './User';
import { UserRepository } from './UserRepository';

export class UserMemoryRepository implements UserRepository {
  private seq: number = 1;
  private userMap: Map<number, User> = new Map<number, User>();

  findById(id: string): User {
    const users = this.userMap.values();
    let user: User;
    for (const _user of users) {
      if (_user.id === id) {
        user = _user;
        break;
      }
    }
    return user;
  }

  save(user: User): User {
    this.userMap.set(this.seq, user);
    const savedUser = this.userMap.get(this.seq);
    this.seq = this.seq + 1;
    return savedUser;
  }
}

import { User } from './user';

export interface UserRepository {
  save(user: User): User;
  findById(id: string): User;
}

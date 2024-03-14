import { User } from './User';

export interface UserRepository {
  save(user: User): User;
  findById(id: string): User;
}

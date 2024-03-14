import { User } from './User';
import { UserMemoryRepository } from './UserMemoryRepository';
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

describe(`유저 서비스`, () => {
  const userRepository: UserRepository = new UserMemoryRepository();
  const userService: UserService = new UserService(userRepository);

  it(`⭕️ 유저를 생성할 수 있음`, () => {
    // given
    const id = 'test1234';
    const password = 'test1234!@#';

    // when
    const user: User = userService.create(id, password);

    // then
    expect(user).not.toBeNull();
    expect(user.id).toBe(id);
    expect(user.password).toBe(password);
  });
  it(`⭕️ 유저를 조회할 수 있음`, () => {
    // given
    const id = 'test1234';

    // when
    const user: User = userService.findById(id);

    // then
    expect(user).not.toBeNull();
    expect(user.id).toBe(id);
    expect(user.password).not.toBeUndefined();
  });
});

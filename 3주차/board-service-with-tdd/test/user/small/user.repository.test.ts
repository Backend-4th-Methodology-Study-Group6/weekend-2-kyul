import { User } from './user.domain.test';

export interface UserRepository {
  save(user: User): User;
  findById(id: string): User;
}

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

describe(`유저 레포지토리`, () => {
  const userRepository: UserRepository = new UserMemoryRepository();

  it(`⭕️ 유저를 저장할 수 있음`, () => {
    const id = 'test1234';
    const password = 'test1234!@#';
    const newUser: User = User.create(id, password);

    const user: User = userRepository.save(newUser);

    expect(user).not.toBeNull();
    expect(user.id).toBe(id);
    expect(user.password).toBe(password);
  });
  it(`⭕️ 유저를 조회할 수 있음`, () => {
    const id = 'test1234';

    const findings: User = userRepository.findById(id);

    expect(findings).not.toBeNull();
    expect(findings.id).toBe('test1234');
    expect(findings.password).not.toBeNull();
  });
});

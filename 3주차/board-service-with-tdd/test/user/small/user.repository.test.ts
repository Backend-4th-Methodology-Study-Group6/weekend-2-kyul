import { User } from './User';
import { UserMemoryRepository } from './UserMemoryRepository';
import { UserRepository } from './UserRepository';

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

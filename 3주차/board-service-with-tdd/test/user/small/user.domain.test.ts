export class User {
  static create(id: string, password: string): User {
    if (id.length < 8) throw Error(`아이디는 8자 이상이어야 합니다.`);
    if (/[^a-zA-Z0-9]/gi.exec(id))
      throw Error(`아이디는 특수문자를 사용할 수 없습니다.`);
    return new User();
  }
}

describe(`유저 도메인`, () => {
  it(`❌ 유저를 생성할 수 없음 - 길이가 짧은 아이디`, () => {
    // given
    const id = 'test123';
    const password = 'test123!@#';

    // then
    expect(() => {
      User.create(id, password);
    }).toThrow(new Error(`아이디는 8자 이상이어야 합니다.`));
  });
  it(`❌ 유저를 생성할 수 없음 - 특수문자를 사용한 아이디`, () => {
    // given
    const id = 'test1111@@111';
    const password = 'test123!@#';

    // then
    expect(() => {
      User.create(id, password);
    }).toThrow(new Error(`아이디는 특수문자를 사용할 수 없습니다.`));
  });
  it(`❌ 유저를 생성할 수 없음 - 길이가 짧은 패스워드`, () => {});
  it(`❌ 유저를 생성할 수 없음 - 특수문자가 포함되지 않은 패스워드`, () => {});
  it(`⭕️ 유저를 생성할 수 있음`, () => {});
});

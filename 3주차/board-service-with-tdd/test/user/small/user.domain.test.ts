export class User {
  static create(id: string, password: string): User {
    if (id.length < 5)
      throw new UserIdValidationError(`아이디는 5자 이상이어야 합니다.`);
    if (/[^\w]/gi.exec(id))
      throw new UserIdValidationError(
        `아이디는 특수문자를 사용할 수 없습니다.`,
      );
    return new User();
  }
}

export class CustomError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'CustomError';
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export class UserIdValidationError extends CustomError {
  readonly statusCode: number = 400;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, UserIdValidationError.prototype);
  }
}

describe(`유저 도메인`, () => {
  it(`❌ 유저를 생성할 수 없음 - 길이가 짧은 아이디`, () => {
    // given
    const id = 'test';
    const password = 'test123!@#';

    // then
    expect(() => {
      User.create(id, password);
    }).toThrow(new UserIdValidationError(`아이디는 5자 이상이어야 합니다.`));
  });
  it(`❌ 유저를 생성할 수 없음 - 특수문자를 사용한 아이디`, () => {
    // given
    const id = 'test1111@@!11';
    const password = 'test123!@#';

    // then
    expect(() => {
      User.create(id, password);
    }).toThrow(
      new UserIdValidationError(`아이디는 특수문자를 사용할 수 없습니다.`),
    );
  });
  it(`❌ 유저를 생성할 수 없음 - 길이가 짧은 패스워드`, () => {
    // given
    const id = 'test1';
    const password = 'test1';
  });
  it(`❌ 유저를 생성할 수 없음 - 특수문자가 포함되지 않은 패스워드`, () => {});
  it(`⭕️ 유저를 생성할 수 있음`, () => {});
});

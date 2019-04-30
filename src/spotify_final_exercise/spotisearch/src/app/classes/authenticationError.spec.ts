import { AuthenticationError } from './authentication-error';

describe('AuthenticationError', () => {
  it('should create an instance', () => {
    expect(new AuthenticationError()).toBeTruthy();
  });
});

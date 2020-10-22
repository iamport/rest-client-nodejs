import RequestBase from './Base';
import { AuthResponse } from '../response';

interface getTokenData {
  imp_key: string,
  imp_secret: string,
};

/* 사용자 인증 */
class Authenticate extends RequestBase {
  constructor() {
    super();

    this.isTokenNeeded = false;
    this.responseClass = new AuthResponse();
  }

  /* 토큰 발급 */
  public static getToken(data: getTokenData): Authenticate {
    const authenticate = new Authenticate();
    authenticate.url = '/users/getToken';
    authenticate.method = 'POST';
    authenticate.data = data;
    return authenticate;
  }
}

export default Authenticate;

const ResponseBase = require('./index');

class Auth extends ResponseBase {
  public access_token: string;
  public expired_at: Date | number;
  public now: Date | number;

  public setAttributes(response: Auth): void {
    const { 
      access_token,
      expired_at,
      now,
    } = response;
    
    this.access_token = access_token;
    this.expired_at = this.timeToDate(expired_at);
    this.now = this.timeToDate(now);
  }
}

export {};
module.exports = Auth;
const ResponseBase = require('./index');
const Enum = require('../enum');

const codeType = Enum.BankCode.getType();

class BankCode extends ResponseBase {
  public code: typeof codeType;
  public name: string;

  public setAttributes(response: BankCode): void {
    const { code, name } = response;
    this.code = code;
    this.name = name;
  }
}

export {};
module.exports = BankCode;
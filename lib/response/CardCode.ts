const ResponseBase = require('./index');
const Enum = require('../enum');

const codeType = Enum.CardCode.getType();

class CardCode extends ResponseBase {
  public code: typeof codeType;
  public name: string;

  public setAttributes(response: CardCode): void {
    const { code, name } = response;
    this.code = code;
    this.name = name;
  }
}

export {};
module.exports = CardCode;
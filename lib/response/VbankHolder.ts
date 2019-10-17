const _ = require('lodash');
const ResponseBase = require('./index');

class VbankHolder extends ResponseBase {
  public bank_holder: string;

  setAttributes(response: VbankHolder): void {
    const { bank_holder } = response;

    this.bank_holder = bank_holder;
  }
}

export {};
module.exports = VbankHolder;
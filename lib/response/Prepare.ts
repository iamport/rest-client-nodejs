const ResponseBase = require('./index');

class Prepare extends ResponseBase {
  public merchant_uid: string;
  public amount: number;

  setAttributes(response: Prepare): void {
    const { merchant_uid, amount } = response;

    this.merchant_uid = merchant_uid;
    this.amount = amount;
  }
}

export {};
module.exports = Prepare;
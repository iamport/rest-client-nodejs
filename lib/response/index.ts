abstract class ResponseBase {
  public abstract setAttributes(response: ResponseBase): void;

  protected timeToDate(time: number): number | Date {
    return time === 0 ? 0 : new Date(time*1000);
  }

  public getAttributes(): ResponseBase {
    return this;
  }
}

export {};
module.exports = ResponseBase;
module.exports.Item = require('./Item');
module.exports.List = require('./List');
module.exports.Collection = require('./Collection');
module.exports.PaymentResponse = require('./Payment');
module.exports.PaymentAmountResponse = require('./PaymentAmount');
module.exports.NaverPayResponse = require('./NaverPay');
module.exports.EscrowResponse = require('./Escrow');
module.exports.PrepareResponse = require('./Prepare');
module.exports.VbankHolderResponse = require('./VbankHolder');
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
module.exports.AuthResponse = require('./Auth');
module.exports.PaymentResponse = require('./Payment');
module.exports.PaymentAmountResponse = require('./PaymentAmount');
module.exports.NaverProductOrderResponse = require('./NaverProductOrder');
module.exports.NaverCashAmountResponse = require('./NaverCashAmount');
module.exports.NaverReviewResponse = require('./NaverReview');
module.exports.EscrowResponse = require('./Escrow');
module.exports.PrepareResponse = require('./Prepare');
module.exports.VbankHolderResponse = require('./VbankHolder');
module.exports.CertificationResponse = require('./Certification');
module.exports.CardCodeResponse = require('./CardCode');
module.exports.BankCodeResponse = require('./BankCode');
module.exports.ReceiptResponse = require('./Receipt');
module.exports.ExternalResponse = require('./External');
module.exports.KakaoOrderResponse = require('./KakaoOrder');
module.exports.PaycoStatusResponse = require('./PaycoStatus');
module.exports.ScheduledResultResponse = require('./ScheduledResult');
module.exports.CustomerResponse = require('./Customer');
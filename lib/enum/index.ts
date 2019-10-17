abstract class EnumBase {
  public abstract getValue(key: string): string;

  public getKeys(): Array<string> {
    return Object.values(this);
  }

  public getType() {
    const keys = this.getKeys();
    return <const> [...keys];
  }
}

export default EnumBase;
module.exports = EnumBase;
module.exports.Sorting = require('./Sorting');
module.exports.Status = require('./Status');
module.exports.DeliveryMethod = require('./DeliveryMethod');
module.exports.DeliveryCompany = require('./DeliveryCompany');
module.exports.ReturnReason = require('./ReturnReason');
module.exports.CancelReason = require('./CancelReason');
module.exports.VbankCode = require('./VbankCode');
module.exports.BankCode = require('./BankCode');
module.exports.LogisCode = require('./LogisCode');

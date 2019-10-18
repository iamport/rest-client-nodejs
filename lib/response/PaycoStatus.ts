const ResponseBase = require('./index');
const Enum = require('../enum');

const paycoOrderStatusType = Enum.PaycoOrderStatus.getType();
class PaycoStatus extends ResponseBase {
  public status: typeof paycoOrderStatusType;

  public setAttributes(response: PaycoStatus): void {
    const { status } = response;

    this.status = status;
  }
}

export {};
module.exports = PaycoStatus;
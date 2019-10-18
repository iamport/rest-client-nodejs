const _ = require('lodash');
const RequestBase = require('./index');
const { PaycoStatusResponse } = require('../response');
const { PaycoOrderStatus } = require('../enum');

const paycoOrderStatusType = PaycoOrderStatus.getType();
interface postOrderStatusData {
  imp_uid: string,
  status: typeof paycoOrderStatusType,
};

/* 페이코 */
class Payco extends RequestBase {
  constructor() {
    super();

    this.responseClass = new PaycoStatusResponse();
  }

  /* 주문상태 변경 */
  public static postOrderStatus(data: postOrderStatusData): Payco {
    const { imp_uid, status } = data;

    const payco = new Payco();
    payco.url = `/payco/orders/status/${imp_uid}`;
    payco.method = 'POST';
    payco.data = { status };
    return payco;
  }
}

export {};
module.exports = Payco;
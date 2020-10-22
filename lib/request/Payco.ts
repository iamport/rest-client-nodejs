import _ from 'lodash';
import RequestBase from './Base';
import { PaycoStatusResponse } from '../response';
import { PaycoOrderStatusEnum } from '../enum';

interface postOrderStatusData {
  imp_uid: string,
  status: PaycoOrderStatusEnum,
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

export default Payco;
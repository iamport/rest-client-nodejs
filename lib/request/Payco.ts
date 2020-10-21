import _ from 'lodash';
import RequestBase from './index';
import { PaycoStatusResponse } from '../response';
import { PaycoOrderStatus } from '../enum';

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
export default Payco;
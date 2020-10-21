import ResponseBase from './index';
import { PaycoOrderStatus } from '../enum';

const paycoOrderStatusType = PaycoOrderStatus.getType();
class PaycoStatus extends ResponseBase {
  public status: typeof paycoOrderStatusType;

  public setAttributes(response: PaycoStatus): void {
    const { status } = response;

    this.status = status;
  }
}

export {};
export default PaycoStatus;
import ResponseBase from './Base';
import { PaycoOrderStatusEnum } from '../enum';

class PaycoStatus extends ResponseBase {
  public status: PaycoOrderStatusEnum;

  public setAttributes(response: PaycoStatus): void {
    const { status } = response;

    this.status = status;
  }
}

export default PaycoStatus;
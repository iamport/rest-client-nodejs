import ResponseBase from './Base';

class Prepare extends ResponseBase {
  public merchant_uid: string;
  public amount: number;

  public setAttributes(response: Prepare): void {
    const { merchant_uid, amount } = response;

    this.merchant_uid = merchant_uid;
    this.amount = amount;
  }
}

export default Prepare;
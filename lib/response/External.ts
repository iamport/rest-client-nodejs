import ResponseBase from './Base';

class External extends ResponseBase {
  public merchant_uid: string;
  public receipt_tid: string;
  public apply_num: string;
  public type: string;
  public amount: number;
  public vat: number;
  public receipt_url?: string;
  public applied_at: Date | number;
  public cancelled_at?: Date | number;

  public setAttributes(response: External): void {
    const {
      merchant_uid,
      receipt_tid,
      apply_num,
      type,
      amount,
      vat,
      receipt_url,
      applied_at,
      cancelled_at,
    } = response;

    this.merchant_uid = merchant_uid;
    this.receipt_tid = receipt_tid;
    this.apply_num = apply_num;
    this.type = type;
    this.amount = amount;
    this.vat = vat;
    this.receipt_url = receipt_url;
    this.applied_at = this.timeToDate(applied_at);
    this.cancelled_at = this.timeToDate(cancelled_at);
  }
}

export default External;
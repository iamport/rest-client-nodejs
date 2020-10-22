import ResponseBase from './Base';

class Receipt extends ResponseBase {
  public imp_uid: string;
  public receipt_tid: string;
  public apply_num: string;
  public type: string;
  public amount: number;
  public vat: number;
  public receipt_url?: string;
  public applied_at: Date | number;
  public cancelled_at?: Date | number;

  public setAttributes(response: Receipt): void {
    const {
      imp_uid,
      receipt_tid,
      apply_num,
      type,
      amount,
      vat,
      receipt_url,
      applied_at,
      cancelled_at,
    } = response;

    this.imp_uid = imp_uid;
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

export default Receipt;
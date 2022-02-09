import ResponseBase from './Base';
import { ScheduledStatusEnum } from '../enum';

class ScheduledResult extends ResponseBase {
  public customer_uid?: string;
  public merchant_uid?: string;
  public imp_uid?: string;
  public schedule_at?: Date | number;
  public executed_at?: Date | number;
  public revoked_at?: Date | number;
  public amount?: number;
  public name?: string;
  public buyer_name?: string;
  public buyer_email?: string;
  public buyer_tel?: string;
  public buyer_addr?: string;
  public buyer_postcode?: string;
  public custom_data?: string;
  public schedule_status?: ScheduledStatusEnum;
  public payment_status?: 'paid' | 'failed' | 'cancelled';
  public fail_reason?: string;

  public setAttributes(response: ScheduledResult): void {
    const {
      customer_uid,
      merchant_uid,
      imp_uid,
      schedule_at,
      executed_at,
      revoked_at,
      amount,
      name,
      buyer_name,
      buyer_email,
      buyer_tel,
      buyer_addr,
      buyer_postcode,
      custom_data,
      schedule_status,
      payment_status,
      fail_reason,
    } = response;

    this.customer_uid = customer_uid;
    this.merchant_uid = merchant_uid;
    this.imp_uid = imp_uid;
    this.schedule_at = this.timeToDate(schedule_at);
    this.executed_at = this.timeToDate(executed_at);
    this.revoked_at = this.timeToDate(revoked_at);
    this.amount = amount;
    this.name = name;
    this.buyer_name = buyer_name;
    this.buyer_email = buyer_email;
    this.buyer_tel = buyer_tel;
    this.buyer_addr = buyer_addr;
    this.buyer_postcode = buyer_postcode;
    this.custom_data = custom_data;
    this.schedule_status = schedule_status;
    this.payment_status = payment_status;
    this.fail_reason = fail_reason;
  }
}

export default ScheduledResult;
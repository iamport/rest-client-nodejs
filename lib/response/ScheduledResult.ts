const ResponseBase = require('./index');
const { ScheduledStatus } = require('../enum');

const scheduledStatusType = ScheduledStatus.getType();
class ScheduledResult extends ResponseBase {
  public customer_uid?: string;
  public merchant_uid?: string;
  public schedule_at?: Date | number;
  public amount?: number;
  public name?: string;
  public buyer_name?: string;
  public buyer_email?: string;
  public buyer_tel?: string;
  public buyer_addr?: string;
  public buyer_postcode?: string;
  public custom_data?: string;
  public schedule_status?: typeof scheduledStatusType;

  public setAttributes(response: ScheduledResult): void {
    const {
      customer_uid,
      merchant_uid,
      schedule_at,
      amount,
      name,
      buyer_name,
      buyer_email,
      buyer_tel,
      buyer_addr,
      buyer_postcode,
      custom_data,
      schedule_status,
    } = response;

    this.customer_uid = customer_uid;
    this.merchant_uid = merchant_uid;
    this.schedule_at = this.timeToDate(schedule_at);
    this.amount = amount;
    this.name = name;
    this.buyer_name = buyer_name;
    this.buyer_email = buyer_email;
    this.buyer_tel = buyer_tel;
    this.buyer_addr = buyer_addr;
    this.buyer_postcode = buyer_postcode;
    this.custom_data = custom_data;
    this.schedule_status = schedule_status;
  }
}

export {};
module.exports = ScheduledResult;
import ResponseBase from './Base';
import { CardCodeEnum } from '../enum';

class Customer extends ResponseBase {
  public customer_uid: string;
  public card_name: string;
  public card_code?: CardCodeEnum;
  public card_number?: string;
  public card_issuer_code?: string;
  public card_publisher_code?: string;
  public card_issuer_name?: string;
  public card_publisher_name?: string;
  public customer_name?: string;
  public customer_tel?: string;
  public customer_email?: string;
  public customer_addr?: string;
  public customer_postcode?: string;
  public inserted: Date | number;
  public updated: Date | number;

  public setAttributes(response: Customer): void {
    const {
      customer_uid,
      card_name,
      card_code,
      card_number,
      card_issuer_code,
      card_publisher_code,
      card_issuer_name,
      card_publisher_name,
      customer_name,
      customer_tel,
      customer_email,
      customer_addr,
      customer_postcode,
      inserted,
      updated,
    } = response;

    this.customer_uid = customer_uid;
    this.card_name = card_name;
    this.card_code = card_code;
    this.card_number = card_number;
    this.card_issuer_code = card_issuer_code;
    this.card_publisher_code = card_publisher_code;
    this.card_issuer_name = card_issuer_name;
    this.card_publisher_name = card_publisher_name;
    this.customer_name = customer_name;
    this.customer_tel = customer_tel;
    this.customer_email = customer_email;
    this.customer_addr = customer_addr;
    this.customer_postcode = customer_postcode;
    this.inserted = this.timeToDate(inserted);
    this.updated = this.timeToDate(updated);
  }
}

export default Customer;
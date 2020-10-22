import ResponseBase from './Base';

interface NaverPayOrderer {
  name: string,
  id: string,
  tel: string,
};

interface NaverPayAddress {
  base: string,
  detail: string,
  postcode: string,
  tel1: string,
  tel2: string,
  name: string,
};

class NaverProductOrder extends ResponseBase {
  public product_order_id: string;
  public product_order_status: string;
  public claim_type: string;
  public claim_status: string;
  public product_id: string;
  public product_name: string;
  public product_option_id: string;
  public product_option_name: string;
  public product_amount: number;
  public delivery_amount: number;
  public quantity: number;
  public orderer: NaverPayOrderer;
  public shipping_address: NaverPayAddress;
  public shipping_memo: string;
  public shipping_due: Date | number;
  public individual_code: string;

  public setAttributes(response: NaverProductOrder): void {
    const {
      product_order_id,
      product_order_status,
      claim_type,
      claim_status,
      product_id,
      product_name,
      product_option_id,
      product_option_name,
      product_amount,
      delivery_amount,
      quantity,
      orderer,
      shipping_address,
      shipping_memo,
      shipping_due,
      individual_code,
    } = response;

    this.product_order_id = product_order_id;
    this.product_order_status = product_order_status;
    this.claim_type = claim_type;
    this.claim_status = claim_status;
    this.product_id = product_id;
    this.product_name = product_name;
    this.product_option_id = product_option_id;
    this.product_option_name = product_option_name;
    this.product_amount = product_amount;
    this.delivery_amount = delivery_amount;
    this.quantity = quantity;
    this.orderer = orderer;
    this.shipping_address = shipping_address;
    this.shipping_memo = shipping_memo;
    this.shipping_due = this.timeToDate(shipping_due);
    this.individual_code = individual_code;
  }
}

export default NaverProductOrder;
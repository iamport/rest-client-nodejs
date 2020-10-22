import _ from 'lodash';
import ResponseBase from './Base';

interface Amount {
  tax_free: number;
  supply: number;
  vat: number;
  service: number;
};

interface AmountBase {
  cash_receipt: Amount,
  primary: Amount,
  secondary: Amount,
  discount: Amount,
  created?: Date | number,
};

class PaymentAmount extends ResponseBase {
  public amount: number;
  public cash_receipt: Amount;
  public primary: Amount;
  public secondary: Amount;
  public discount: Amount;
  public histories?: AmountBase[];

  public setAttributes(response: PaymentAmount): void {
    const {
      amount,
      cash_receipt,
      primary,
      secondary,
      discount,
      histories,
    } = response;

    this.amount = amount;
    this.cash_receipt = cash_receipt;
    this.primary = primary;
    this.secondary = secondary;
    this.discount = discount;

    this.histories = histories.map((history: AmountBase) => {
      const { created } = history;
      return _.assign(history, { created: this.timeToDate(created)});
    });
  }
}

export default PaymentAmount;
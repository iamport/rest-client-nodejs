import ResponseBase from './Base';

class NaverCashAmount extends ResponseBase {
  public amount_total: number;
  public amount_by_npoint: number;
  public amount_by_primary: number;
  public amount_supply: number;
  public amount_vat: number;

  public setAttributes(response: NaverCashAmount): void {
    const {
      amount_total,
      amount_by_npoint,
      amount_by_primary,
      amount_supply,
      amount_vat,
    } = response;

    this.amount_total = amount_total;
    this.amount_by_npoint = amount_by_npoint;
    this.amount_by_primary = amount_by_primary;
    this.amount_supply = amount_supply;
    this.amount_vat = amount_vat;
  }
}

export default NaverCashAmount;
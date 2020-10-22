import ResponseBase from './Base';

class Escrow extends ResponseBase {
  public company: string;
  public invoice: string;
  public sent_at: number | Date;
  public applied_at: number | Date;

  public setAttributes(response: Escrow): void {
    const {
      company,
      invoice,
      sent_at,
      applied_at,
    } = response;

    this.company = company;
    this.invoice = invoice;
    this.sent_at = this.timeToDate(sent_at);
    this.applied_at = this.timeToDate(applied_at);
  }
}

export default Escrow;
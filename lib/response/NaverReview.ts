import ResponseBase from './Base';

class NaverReview extends ResponseBase {
  public review_id: string;
  public score: string;
  public title: string;
  public content?: string;
  public product_order_id: string;
  public product_id: string;
  public product_name: string;
  public product_option_name?: string;
  public writer: string;
  public created_at: Date | number;
  public modified_at?: Date | number;

  public setAttributes(response: NaverReview): void {
    const {
      review_id,
      score,
      title,
      content,
      product_order_id,
      product_id,
      product_name,
      product_option_name,
      writer,
      created_at,
      modified_at,
    } = response;

    this.review_id = review_id;
    this.score = score;
    this.title = title;
    this.content = content;
    this.product_order_id = product_order_id;
    this.product_id = product_id;
    this.product_name = product_name;
    this.product_option_name = product_option_name;
    this.writer = writer;
    this.created_at = this.timeToDate(created_at);
    this.modified_at = this.timeToDate(modified_at);
  }
}

export default NaverReview;
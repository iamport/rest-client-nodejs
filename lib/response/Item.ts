
class Item {
  public code: number;
  public message: string;
  public response: any;
  
  constructor(data: Item, responseClass: any) {
    const { code, message, response } = data;
    this.code = code;
    this.message = message;

    responseClass.setAttributes(response);
    this.response = responseClass.getAttributes();
  }
}

export default Item;
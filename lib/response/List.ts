
class List {
  public code: number;
  public message: string;
  public response: Array<any>;
  
  constructor(data: List, responseClass: any) {
    const { code, message, response } = data;
    this.code = code;
    this.message = message;
    this.response = response.map((eachResponse: any) => {
      responseClass.setAttributes(eachResponse);
      return responseClass.getAttributes();
    });
  }
}

export {};
module.exports = List;
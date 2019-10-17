
class Collection {
  public code: number;
  public message: string;
  public response: any;
  
  constructor(data: Collection, responseClass: any) {
    const { code, message, response } = data;
    this.code = code;
    this.message = message;

    const { total, previous, next, list } = response;
    this.response = {
      total,
      previous,
      next,
      list: list.map((eachList: any) => {
        responseClass.setAttributes(eachList);
        return responseClass.getAttributes();
      }),
    };
  }
}

export {};
module.exports = Collection;
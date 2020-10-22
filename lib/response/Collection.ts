import _ from 'lodash';

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
        const attributes = responseClass.getAttributes();
        return _.assign({}, attributes);
      }),
    };
  }
}

export default Collection;
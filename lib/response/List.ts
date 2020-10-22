import _ from 'lodash';

class List {
  public code: number;
  public message: string;
  public response: any;
  
  constructor(data: List, responseClass: any) {
    const { code, message, response } = data;
    this.code = code;
    this.message = message;
    this.response = response.map((eachResponse: any) => {
      responseClass.setAttributes(eachResponse);
      const attributes = responseClass.getAttributes();
      return _.assign({}, attributes);
    });
  }
}

export default List;
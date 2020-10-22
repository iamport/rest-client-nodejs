import _ from 'lodash';

import { Iamport } from './Iamport';
import RequestBase from './request/Base';

interface Iterator {
  hasNext(): boolean;
  next(iamport: Iamport): Promise<any>;
}

class IamportIterator implements Iterator {
  public request: RequestBase;

  constructor(request: RequestBase) {
    this.request = request;
  }

  public hasNext(): boolean {
    return !this.request.isLast;
  }

  public next(iamport: Iamport): Promise<any> {
    const { params } = this.request;
    const { page } = params;
    const newPage = page + 1;
    this.request.params = _.assign(params, { page: newPage });

    return this.request.request(iamport);
  }
}
export default IamportIterator;
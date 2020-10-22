import _ from 'lodash';
import ResponseBase from './Base';

class VbankHolder extends ResponseBase {
  public bank_holder: string;

  public setAttributes(response: VbankHolder): void {
    const { bank_holder } = response;

    this.bank_holder = bank_holder;
  }
}

export default VbankHolder;
import ResponseBase from './index';
import { BankCode as EmumBankCode } from '../enum';

const codeType = EmumBankCode.getType();

class BankCode extends ResponseBase {
  public code: typeof codeType;
  public name: string;

  public setAttributes(response: BankCode): void {
    const { code, name } = response;
    this.code = code;
    this.name = name;
  }
}

export default BankCode;
import ResponseBase from './Base';
import { BankCodeEnum } from '../enum';

class BankCode extends ResponseBase {
  public code: BankCodeEnum;
  public name: string;

  public setAttributes(response: BankCode): void {
    const { code, name } = response;
    this.code = code;
    this.name = name;
  }
}

export default BankCode;
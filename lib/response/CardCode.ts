import ResponseBase from './index';
import { CardCode as EnumCardCode } from '../enum';

const codeType = EnumCardCode.getType();

class CardCode extends ResponseBase {
  public code: typeof codeType;
  public name: string;

  public setAttributes(response: CardCode): void {
    const { code, name } = response;
    this.code = code;
    this.name = name;
  }
}

export default CardCode;
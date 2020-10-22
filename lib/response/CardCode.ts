import ResponseBase from './Base';
import { CardCodeEnum } from '../enum';

class CardCode extends ResponseBase {
  public code: CardCodeEnum;
  public name: string;

  public setAttributes(response: CardCode): void {
    const { code, name } = response;
    this.code = code;
    this.name = name;
  }
}

export default CardCode;
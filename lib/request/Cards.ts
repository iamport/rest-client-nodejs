import RequestBase from './index';
import { CardCodeResponse } from '../response';
import { CardCode } from '../enum';

const cardCodeType = CardCode.getType();
interface getCardParams {
  code: typeof cardCodeType,
};

/* 금융결제원 표준 코드 기준 카드사 정보 조회 */
class Cards extends RequestBase {
  constructor() {
    super();

    this.responseClass = new CardCodeResponse();
  }

  /* 모든 카드사 정보 조회 */
  public static getCards(): Cards {
    const cards = new Cards();
    cards.url = '/cards';
    cards.responseType = 'list';
    return cards;
  }

  /* 특정 카드사 정보 조회 */
  public static getCard({ code }: getCardParams): Cards {
    const cards = new Cards();
    cards.url = `/cards/${code}`;
    return cards;
  }
}

export {};
export default Cards;

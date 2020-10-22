import RequestBase from './Base';
import { CardCodeResponse } from '../response';
import { CardCodeEnum } from '../enum';

interface getCardParams {
  code: CardCodeEnum,
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

export default Cards;

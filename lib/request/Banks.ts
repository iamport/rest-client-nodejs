import RequestBase from './Base';
import { BankCodeResponse } from '../response';
import { BankCodeEnum } from '../enum';

interface getBankParams {
  code: BankCodeEnum,
};

/* 금융결제원 표준 코드 기준 은행 정보 조회 */
class Banks extends RequestBase {
  constructor() {
    super();

    this.responseClass = new BankCodeResponse();
  }

  /* 모든 은행 정보 조회 */
  public static getBanks(): Banks {
    const banks = new Banks();
    banks.url = '/banks';
    banks.responseType = 'list';
    return banks;
  }

  /* 특정 은행 정보 조회 */
  public static getBank({ code }: getBankParams): Banks {
    const banks = new Banks();
    banks.url = `/banks/${code}`;
    return banks;
  }
}
export default Banks;

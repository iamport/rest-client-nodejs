const RequestBase = require('./index');
const { BankCodeResponse } = require('../response');
const { BankCode } = require('../enum');

const bankCodeType = BankCode.getType();
interface getBankParams {
  code: typeof bankCodeType,
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

export {};
module.exports = Banks;

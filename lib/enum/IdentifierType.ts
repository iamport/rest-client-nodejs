import EnumBase from '.';

class IdentifierType extends EnumBase {
  public PERSON: string = 'person';
  public BUSINESS: string = 'business';
  public PHONE: string = 'phone';
  public TAXCARD: string = 'taxcard';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'person':
          return '주민등록번호';
        case 'business':
          return '사업자등록번호';
        case 'phone':
          return '휴대폰번호';
        case 'taxcard':
          return '국세청현금영수증카드';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new IdentifierType();
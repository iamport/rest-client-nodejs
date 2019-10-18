import EnumBase from '.';

class IdentifierFor extends EnumBase {
  public PERSON: string = 'person';
  public COMPANY: string = 'company';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'person':
          return '소득공제용(개인)';
        case 'company':
          return '지출증빙용(법인)';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new IdentifierFor();
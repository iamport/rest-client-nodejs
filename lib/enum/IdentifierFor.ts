export enum IdentifierForEnum {
  PERSON = 'person',
  COMPANY = 'company',
};

class IdentifierFor {
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
export default new IdentifierFor();
import EnumBase from '.';

class SettleVbankCode extends EnumBase {
  public IBK: string = '003';
  public KB: string = '004';
  public KEB: string = '005';
  public NH: string = '011';
  public WOORI: string = '020';
  public SC: string = '023';
  public CITY: string = '027';
  public DAEGU: string = '031';
  public KYUNG_NAM: string = '039';
  public BUSAN: string = '032';
  public GWANG_JU: string = '034';
  public POST_OFFICE: string = '071';
  public SHINHAN: string = '088';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case '003':
          return '기업은행';
        case '004':
          return '국민은행';
        case '005':
          return 'KEB하나은행';
        case '011':
          return '농협중앙회(세틀뱅크 테스트 계정에서만 9999오류 발생)';
        case '020':
          return '우리은행';
        case '023':
          return 'SC제일은행';
        case '027':
          return '한국씨티은행';
        case '031':
          return '대구은행';
        case '039':
          return '경남은행';
        case '032':
          return '부산은행';
        case '034':
          return '광주은행';
        case '071':
          return '정보통신부 우체국';
        case '088':
          return '신한은행(세틀뱅크 테스트 계정에서만 9999오류 발생)';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new SettleVbankCode();
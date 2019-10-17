import EnumBase from '.';

class VbankCode extends EnumBase {
  public KB: string = '004';
  public SC: string = '023';
  public KYUNG_NAM: string = '039';
  public GWANG_JU: string = '034';
  public IBK: string = '003';
  public NH: string = '011';
  public DAE_GU: string = '031';
  public BUSAN: string = '032';
  public KDB: string = '002';
  public SH: string = '007';
  public SHIN_HAN: string = '088';
  public SIN_HYUP: string = '048';
  public OLD_KEB: string = '005';
  public WOORI: string = '020';
  public POST_OFFICE: string = '071';
  public JUN_BOOK: string = '037';
  public JEJU: string = '035';
  public CHOOK_HYUP: string = '012';
  public KEP: string = '081';
  public CITY: string = '027';
  public K_BANK: string = '089';
  public KAKAO: string = '090';
  public YUANTA_SC: string = '209';
  public HYUNDAI_SC: string = '218';
  public MIRAE_ASSET_SC: string = '230';
  public DAEWOO_SC: string = '238';
  public SAMSUNG_SC: string = '240';
  public KIS: string = '243';
  public WOORI_SC: string = '247';
  public KYOBO_SC: string = '261';
  public HI_SC: string = '262';
  public HMC_SC: string = '263';
  public KIWOOM_SC: string = '264';
  public EBEST_SC: string = '265';
  public SK_SC: string = '266';
  public DAI_SHIN_SC: string = '267';
  public IM_SC: string = '268';
  public HAN_WHA_SC: string = '269';
  public HANA_SC: string = '270';
  public SHIN_HAN_SC: string = '278';
  public DB_SC: string = '279';
  public EUGENE_SC: string = '280';
  public MERITZ_SC: string = '287';
  public NH_SC: string = '289';
  public BOOKOOK_SC: string = '290';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case '004':
          return 'KB국민은행';
        case '023':
          return 'SC제일은행';
        case '039':
          return '경남은행';
        case '034':
          return '광주은행';
        case '003':
          return '기업은행';
        case '011':
          return '농협';
        case '031':
          return '대구은행';
        case '032':
          return '부산은행';
        case '002':
          return '산업은행';
        case '007':
          return '수협';
        case '088':
          return '신한은행';
        case '048':
          return '신협';
        case '005':
          return '외환은행';
        case '020':
          return '우리은행';
        case '071':
          return '우체국';
        case '037':
          return '전북은행';
        case '035':
          return '제주은행';
        case '012':
          return '축협';
        case '081':
          return '하나은행(서울은행)';
        case '027':
          return '한국씨티은행(한미은행)';
        case '089':
          return 'K뱅크';
        case '090':
          return '카카오뱅크';
        case '209':
          return '유안타증권';
        case '218':
          return '현대증권';
        case '230':
          return '미래에셋증권';
        case '238':
          return '대우증권';
        case '240':
          return '삼성증권';
        case '243':
          return '한국투자증권';
        case '247':
          return '우리투자증권';
        case '261':
          return '교보증권';
        case '262':
          return '하이투자증권';
        case '263':
          return '에이치엠씨투자증권';
        case '264':
          return '키움증권';
        case '265':
          return '이트레이드증권';
        case '266':
          return '에스케이증권';
        case '267':
          return '대신증권';
        case '268':
          return '솔로몬투자증권';
        case '269':
          return '한화증권';
        case '270':
          return '하나대투증권';
        case '278':
          return '굿모닝신한증권';
        case '279':
          return '동부증권';
        case '280':
          return '유진투자증권';
        case '287':
          return '메리츠증권';
        case '289':
          return '엔에이치투자증권';
        case '290':
          return '부국증권';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new VbankCode();
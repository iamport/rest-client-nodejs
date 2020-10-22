export enum BankCodeEnum {
  BOK = '001',
  KDB = '002',
  IBK = '003',
  KB = '004',
  OLD_KEB = '005',
  SH = '007',
  EXIM = '008',
  NH = '011',
  CHOOK_HYUP = '012',
  WOORI = '020',
  SC = '023',
  CITY = '027',
  DAE_GU = '031',
  BUSAN = '032',
  GWANG_JU = '034',
  JEJU = '035',
  JUN_BOOK = '037',
  KYUNG_NAM = '039',
  MG = '045',
  SIN_HYUP = '048',
  FSB = '050',
  JP = '052',
  HSBC = '054',
  DEUTSCHE = '055',
  RBSPLC = '056',
  JBMC = '057',
  MIZUHO = '058',
  UFJ = '059',
  BOA = '060',
  BNP = '061',
  ICBC = '062',
  BOC = '063',
  NFCF = '064',
  UOB = '065',
  BOCC = '066',
  POST_OFFICE = '071',
  KODIT = '076',
  KIBO = '077',
  KEP = '081',
  SHIN_HAN = '088',
  K_BANK = '089',
  KAKAO = '090',
  HF = '093',
  SGI = '094',
  POLICE = '095',
  NICE = '096',
  KFTC = '099',
  YUANTA_SC = '209',
  HYUNDAI_SC = '218',
  SANG_SANG_IN_SC = '221',
  HAN_YANG_SC = '222',
  LEADING_SC = '223',
  BNK_SC = '224',
  IBK_SC = '225',
  KB_SC = '226',
  KTB_SC = '227',
  MIRAE_ASSET_SC = '230',
  DAEWOO_SC = '238',
  SAMSUNG_SC = '240',
  KIS = '243',
  WOORI_SC = '247',
  KYOBO_SC = '261',
  HI_SC = '262',
  HMC_SC = '263',
  KIWOOM_SC = '264',
  EBEST_SC = '265',
  SK_SC = '266',
  DAI_SHIN_SC = '267',
  IM_SC = '268',
  HAN_WHA_SC = '269',
  HANA_SC = '270',
  SHIN_HAN_SC = '278',
  DB_SC = '279',
  EUGENE_SC = '280',
  MERITZ_SC = '287',
  NH_SC = '289',
  BOOKOOK_SC = '290',
  SHIN_YOUNG_SC = '291',
  LIG_SC = '292',
  KSFC = '293',
  FOSS_KOREA = '294',
  WOORIIB = '295',
  SS_FUTURES = '296',
  OLD_KEB_FUTURES = '297',
  HI_FUTURES = '298',
};

class BankCode {
  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case '001':
          return '한국은행';
        case '002':
          return '산업은행';
        case '003':
          return '기업은행';
        case '004':
          return '국민은행';
        case '005':
          return '외환은행';
        case '007':
          return '수협중앙회';
        case '008':
          return '수출입은행';
        case '011':
          return '농협은행';
        case '012':
          return '지역 농.축협';
        case '020':
          return '우리은행';
        case '023':
          return 'SC은행';
        case '027':
          return '한국씨티은행';
        case '031':
          return '대구은행';
        case '032':
          return '부산은행';
        case '034':
          return '광주은행';
        case '035':
          return '제주은행';
        case '037':
          return '전북은행';
        case '039':
          return '경남은행';
        case '045':
          return '새마을금고중앙회';
        case '048':
          return '신협중앙회';
        case '050':
          return '상호저축은행';
        case '052':
          return '모건스탠리은행';
        case '054':
          return 'HSBC은행';
        case '055':
          return '도이치은행';
        case '056':
          return '알비에스피엘씨은행';
        case '057':
          return '제이피모간체이스은행';
        case '058':
          return '미즈호은행';
        case '059':
          return '미쓰비시도쿄UFJ은행';
        case '060':
          return 'BOA은행';
        case '061':
          return '비엔피파리바은행';
        case '062':
          return '중국공상은행';
        case '063':
          return '중국은행';
        case '064':
          return '산림조합중앙회';
        case '065':
          return '대화은행';
        case '066':
          return '교통은행';
        case '071':
          return '우체국';
        case '076':
          return '신용보증기금';
        case '077':
          return '기술보증기금';
        case '081':
          return 'KEB하나은행';
        case '088':
          return '신한은행';
        case '089':
          return '케이뱅크';
        case '090':
          return '카카오뱅크';
        case '093':
          return '한국주택금융공사';
        case '094':
          return '서울보증보험';
        case '095':
          return '경찰청';
        case '096':
          return '한국전자금융(주)';
        case '099':
          return '금융결제원';
        case '209':
          return '유안타증권';
        case '218':
          return '현대증권';
        case '221':
          return '골든브릿지투자증권';
        case '222':
          return '한양증권';
        case '223':
          return '리딩투자증권';
        case '224':
          return 'BNK투자증권';
        case '225':
          return 'IBK투자증권';
        case '226':
          return 'KB투자증권';
        case '227':
          return 'KTB투자증권';
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
          return 'HMC투자증권';
        case '264':
          return '키움증권';
        case '265':
          return '이베스트투자증권';
        case '266':
          return 'SK증권';
        case '267':
          return '대신증권';
        case '268':
          return '솔로몬투자증권';
        case '269':
          return '한화투자증권';
        case '270':
          return '하나대투증권';
        case '278':
          return '신한금융투자';
        case '279':
          return '동부증권';
        case '280':
          return '유진투자증권';
        case '287':
          return '메리츠종합금융증권';
        case '289':
          return 'NH투자증권';
        case '290':
          return '부국증권';
        case '291':
          return '신영증권';
        case '292':
          return '엘아이지투자증권';
        case '293':
          return '한국증권금융';
        case '294':
          return '펀드온라인코리아';
        case '295':
          return '우리종합금융';
        case '296':
          return '삼성선물';
        case '297':
          return '외환선물';
        case '298':
          return '현대선물';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}
export default new BankCode();
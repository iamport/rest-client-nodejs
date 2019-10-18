import EnumBase from '.';

class BankCode extends EnumBase {
  public BOK: string = '001';
  public KDB: string = '002';
  public IBK: string = '003';
  public KB: string = '004';
  public OLD_KEB: string = '005';
  public SH: string = '007';
  public EXIM: string = '008';
  public NH: string = '011';
  public CHOOK_HYUP: string = '012';
  public WOORI: string = '020';
  public SC: string = '023';
  public CITY: string = '027';
  public DAE_GU: string = '031';
  public BUSAN: string = '032';
  public GWANG_JU: string = '034';
  public JEJU: string = '035';
  public JUN_BOOK: string = '037';
  public KYUNG_NAM: string = '039';
  public MG: string = '045';
  public SIN_HYUP: string = '048';
  public FSB: string = '050';
  public JP: string = '052';
  public HSBC: string = '054';
  public DEUTSCHE: string = '055';
  public RBSPLC: string = '056';
  public JBMC: string = '057';
  public MIZUHO: string = '058';
  public UFJ: string = '059';
  public BOA: string = '060';
  public BNP: string = '061';
  public ICBC: string = '062';
  public BOC: string = '063';
  public NFCF: string = '064';
  public UOB: string = '065';
  public BOCC: string = '066';
  public POST_OFFICE: string = '071';
  public KODIT: string = '076';
  public KIBO: string = '077';
  public KEP: string = '081';
  public SHIN_HAN: string = '088';
  public K_BANK: string = '089';
  public KAKAO: string = '090';
  public HF: string = '093';
  public SGI: string = '094';
  public POLICE: string = '095';
  public NICE: string = '096';
  public KFTC: string = '099';
  public YUANTA_SC: string = '209';
  public HYUNDAI_SC: string = '218';
  public SANG_SANG_IN_SC: string = '221';
  public HAN_YANG_SC: string = '222';
  public LEADING_SC: string = '223';
  public BNK_SC: string = '224';
  public IBK_SC: string = '225';
  public KB_SC: string = '226';
  public KTB_SC: string = '227';
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
  public SHIN_YOUNG_SC: string = '291';
  public LIG_SC: string = '292';
  public KSFC: string = '293';
  public FOSS_KOREA: string = '294';
  public WOORIIB: string = '295';
  public SS_FUTURES: string = '296';
  public OLD_KEB_FUTURES: string = '297';
  public HI_FUTURES: string = '298';

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

module.exports = new BankCode();
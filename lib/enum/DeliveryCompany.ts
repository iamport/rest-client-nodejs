export enum DeliveryCompanyEnum {
  CJGLS = 'CJGLS',
  KGB = 'KGB',
  DONGBU = 'DONGBU',
  EPOST = 'EPOST',
  REGISTPOST = 'REGISTPOST',
  HANJIN = 'HANJIN',
  HYUNDAI = 'HYUNDAI',
  KGBLS = 'KGBLS',
  INNOGIS = 'INNOGIS',
  DAESIN = 'DAESIN',
  ILYANG = 'ILYANG',
  KDEXP = 'KDEXP',
  CHUNIL = 'CHUNIL',
  CH1 = 'CH1',
  HDEXP = 'HDEXP',
  CVSNET = 'CVSNET',
  DHL = 'DHL',
  FEDEX = 'FEDEX',
  GSMNTON = 'GSMNTON',
  WARPEX = 'WARPEX',
  WIZWA = 'WIZWA',
  EMS = 'EMS',
  DHLDE = 'DHLDE',
  ACIEXPRESS = 'ACIEXPRESS',
  EZUSA = 'EZUSA',
  PANTOS = 'PANTOS',
  UPS = 'UPS',
  HLCGLOBAL = 'HLCGLOBAL',
  KOREXG = 'KOREXG',
  TNT = 'TNT',
  SWGEXP = 'SWGEXP',
  DAEWOON = 'DAEWOON',
  USPS = 'USPS',
  IPARCEL = 'IPARCEL',
  KUNYOUNG = 'KUNYOUNG',
  HPL = 'HPL',
  DADREAM = 'DADREAM',
  SLX = 'SLX',
  SFEXPRESS = 'SFEXPRESS',
  HONAM = 'HONAM',
}

class DeliveryCompany {
  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'CJGLS' :
          return 'CJ 대한통운';
        case 'KGB' :
          return '로젠택배';
        case 'DONGBU' :
          return 'KG 로지스';
        case 'EPOST' :
          return '우체국택배';
        case 'REGISTPOST' :
          return '우편등기';
        case 'HANJIN' :
          return '한진택배';
        case 'HYUNDAI' :
          return '현대택배';
        case 'KGBLS' :
          return 'KGB 택배';
        case 'INNOGIS' :
          return 'GTX 로지스';
        case 'DAESIN' :
          return '대신택배';
        case 'ILYANG' :
          return '일양로지스';
        case 'KDEXP' :
          return '경동택배';
        case 'CHUNIL' :
          return '천일택배';
        case 'CH1' :
          return '기타 택배';
        case 'HDEXP' :
          return '합동택배';
        case 'CVSNET' :
          return '편의점택배';
        case 'DHL' :
          return 'DHL';
        case 'FEDEX' :
          return 'FEDEX';
        case 'GSMNTON' :
          return 'GSMNTON';
        case 'WARPEX' :
          return 'WarpEx';
        case 'WIZWA' :
          return 'WIZWA';
        case 'EMS' :
          return 'EMS';
        case 'DHLDE' :
          return 'DHL(독일)';
        case 'ACIEXPRESS' :
          return 'ACI';
        case 'EZUSA' :
          return 'EZUSA';
        case 'PANTOS' :
          return '범한판토스';
        case 'UPS' :
          return 'UPS';
        case 'HLCGLOBAL' :
          return '현대택배(국제택배)';
        case 'KOREXG' :
          return 'CJ 대한통운(국제택배)';
        case 'TNT' :
          return 'TNT';
        case 'SWGEXP' :
          return '성원글로벌';
        case 'DAEWOON' :
          return '대운글로벌';
        case 'USPS' :
          return 'USPS';
        case 'IPARCEL' :
          return 'i-parcel';
        case 'KUNYOUNG' :
          return '건영택배';
        case 'HPL' :
          return '한의사랑택배';
        case 'DADREAM' :
          return '다드림';
        case 'SLX' :
          return 'SLX 택배';
        case 'SFEXPRESS' :
          return '순풍택배';
        case 'HONAM' :
          return '호남택배';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}
export default new DeliveryCompany();
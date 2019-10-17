import EnumBase from '.';

class DeliveryCompany extends EnumBase {
  public CJGLS: string = 'CJGLS';
  public KGB: string = 'KGB';
  public DONGBU: string = 'DONGBU';
  public EPOST: string = 'EPOST';
  public REGISTPOST: string = 'REGISTPOST';
  public HANJIN: string = 'HANJIN';
  public HYUNDAI: string = 'HYUNDAI';
  public KGBLS: string = 'KGBLS';
  public INNOGIS: string = 'INNOGIS';
  public DAESIN: string = 'DAESIN';
  public ILYANG: string = 'ILYANG';
  public KDEXP: string = 'KDEXP';
  public CHUNIL: string = 'CHUNIL';
  public CH1: string = 'CH1';
  public HDEXP: string = 'HDEXP';
  public CVSNET: string = 'CVSNET';
  public DHL: string = 'DHL';
  public FEDEX: string = 'FEDEX';
  public GSMNTON: string = 'GSMNTON';
  public WARPEX: string = 'WARPEX';
  public WIZWA: string = 'WIZWA';
  public EMS: string = 'EMS';
  public DHLDE: string = 'DHLDE';
  public ACIEXPRESS: string = 'ACIEXPRESS';
  public EZUSA: string = 'EZUSA';
  public PANTOS: string = 'PANTOS';
  public UPS: string = 'UPS';
  public HLCGLOBAL: string = 'HLCGLOBAL';
  public KOREXG: string = 'KOREXG';
  public TNT: string = 'TNT';
  public SWGEXP: string = 'SWGEXP';
  public DAEWOON: string = 'DAEWOON';
  public USPS: string = 'USPS';
  public IPARCEL: string = 'IPARCEL';
  public KUNYOUNG: string = 'KUNYOUNG';
  public HPL: string = 'HPL';
  public DADREAM: string = 'DADREAM';
  public SLX: string = 'SLX';
  public SFEXPRESS: string = 'SFEXPRESS';
  public HONAM: string = 'HONAM';

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

module.exports = new DeliveryCompany();
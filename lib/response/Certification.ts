import ResponseBase from './Base';

class Certification extends ResponseBase {
  public imp_uid: string;
  public merchant_uid?: string;
  public pg_tid?: string;
  public pg_provider?: string;
  public name?: string;
  public gender?: string;
  public birth?: Date | number;
  public birthday?: string;
  public foreigner?: boolean;
  public certified?: boolean;
  public certified_at?: Date | number;
  public unique_key?: string;
  public unique_in_site?: string;
  public origin?: string;

  public setAttributes(response: Certification): void {
    const {
      imp_uid,
      merchant_uid,
      pg_tid,
      pg_provider,
      name,
      gender,
      birth,
      birthday,
      foreigner,
      certified,
      certified_at,
      unique_key,
      unique_in_site,
      origin,
    } = response;
    this.imp_uid = imp_uid;
    this.merchant_uid = merchant_uid;
    this.pg_tid = pg_tid;
    this.pg_provider = pg_provider;
    this.name = name;
    this.gender = gender;
    this.birth = this.timeToDate(birth);
    this.birthday = birthday;
    this.foreigner = foreigner;
    this.certified = certified;
    this.certified_at = this.timeToDate(certified_at);
    this.unique_key = unique_key;
    this.unique_in_site = unique_in_site;
    this.origin = origin;
  }
}

export default Certification;
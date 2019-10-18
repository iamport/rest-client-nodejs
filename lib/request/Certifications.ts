const RequestBase = require('./index');
const { CertificationResponse } = require('../response');

import { ImpUidParams } from '../../';

/* 휴대폰 본인인증 */
class Certifications extends RequestBase {
  constructor() {
    super();

    this.responseClass = new CertificationResponse();
  }

  /* 휴대폰 본인인증 정보 조회 */
  public static getCertification({ imp_uid }: ImpUidParams): Certifications {
    const certifications = new Certifications();
    certifications.url = `/certifications/${imp_uid}`;
    return certifications;
  }

  /* 휴대폰 본인인증 정보 삭제 */
  public static deleteCertification({ imp_uid }: ImpUidParams): Certifications {
    const certifications = new Certifications();
    certifications.url = `/certifications/${imp_uid}`;
    certifications.method = 'DELETE';
    return certifications;
  }
}

export {};
module.exports = Certifications;

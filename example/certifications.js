import { Certifications } from '../lib/request';

module.exports = async (iamport) => {
  /* 휴대폰 본인인증 정보 조회 */
  const getCertification = Certifications.getCertification({
    imp_uid: 'imp_883251183633',
  });
  await getCertification.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 휴대폰 본인인증 정보 삭제 */
  const deleteCertification = Certifications.deleteCertification({
    imp_uid: 'imp_883251183633',
  });
  await deleteCertification.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));
};

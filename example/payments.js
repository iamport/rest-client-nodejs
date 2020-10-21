import _ from 'lodash';
import IamportIterator from '../lib/IamportIterator';
import { Payments } from '../lib/request';

module.exports = async (iamport) => {
  /* 결제내역 조회 > 아임포트 번호 */
  const impUidsParams = Payments.getByImpUids({
    imp_uid: ['imp_829275950993', 'imp_202176503865', 'helelelel'],
  });
  await impUidsParams.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 결제내역 조회 > 주문 번호 */
  const merchantUidsParams = Payments.getByMerchantUids({
    merchant_uid: 'nobody_1570682275823',
    status: 'cancelled',
    sorting: '-updated',
    page: 1,
  });
  await merchantUidsParams.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));


  /* 결제내역 조회 > 결제 상태 */
  const paymentByStatus = Payments.getByStatus({
    status: 'ready',
    sorting: '-updated',
    page: 1,
    limit: 20,
  });
  let result = [];
  await paymentByStatus.request(iamport)
  .then(async response => {
    result = _.concat(result, response.data.response.list);

    const iterator = new IamportIterator(paymentByStatus);
    while(iterator.hasNext()) {
      await iterator.next(iamport)
      .then(response => {
        result = _.concat(result, response.data.response.list);
      })
      .catch(error => Promise.reject(error));
    }
    console.log('response: ', response.data.code);
  })
  .catch(error => console.log('error: ', error.response.data));

  /* 결제정보 조회 > 아임포트 번호 */
  const paymentByImpUid = Payments.getByImpUid({
    imp_uid: 'imp_829275950993',
  });
  await paymentByImpUid.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));


  /* 결제정보 조회 > 주문번호 */
  const paymentByMerchantUid = Payments.getByMerchantUid({
    merchant_uid: 'nobody_1570682275823',
    status: 'cancelled',
    sorting: '-updated',
  });
  await paymentByMerchantUid.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 결제금액 조회 > 아임포트 번호 */
  const amountByImpUid = Payments.getAmountByImpUid({
    imp_uid: 'imp_448280090638',
  });
  await amountByImpUid.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 결제취소 */
  const paymentCancel = Payments.cancel({
    imp_uid: 'imp_448280090638',
    amount: 0,
    tax_free: 0,
    checksum: 1000,
    reason: 'test by deedee',
  });
  await paymentCancel.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));
};

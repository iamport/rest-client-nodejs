const { NaverPay } = require('../lib/request');

/* 네이버페이 > 결제형 */
module.exports = async (iamport) => {
  /* 포인트 적립 */
  const postPoint = NaverPay.postPoint({
    imp_uid: 'imp_474085849392',
  });
  await postPoint.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 에스크로 주문 확정 */
  const postEscrow = NaverPay.postEscrow({
    imp_uid: 'imp_474085849392',
  });
  await postEscrow.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 현금영수증 발급 가능 금액 조회 */
  const getCashAmount = NaverPay.getCashAmount({
    imp_uid: 'imp_474085849392',
  });
  await getCashAmount.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

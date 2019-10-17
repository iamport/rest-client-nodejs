const { NaverPay } = require('../lib/request');

module.exports = async (iamport) => {
  /* 결제취소 */
  const cancelParams = NaverPay.cancel({
    imp_uid: 'imp_474085849392',
    product_order_id: ['haha', '2019101461256650'],
    reason: 'SOLD_OUT',
  });
  await cancelParams.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 발주처리 */
  const placeParams = NaverPay.place({
    imp_uid: 'imp_474085849392',
    product_order_id: ['haha', '2019101461256650'],
  });
  await placeParams.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 반품요청 */
  const requestReturnParams = NaverPay.requestReturn({
    imp_uid: 'imp_909917793094',
    product_order_id: ['haha', '2019101460921650'],
    reason: 'INTENT_CHANGED ',
    delivery_method: 'RETURN_INDIVIDUAL',
  });
  await requestReturnParams.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 주문번호 조회 */
  const productOrderIdParams = NaverPay.getProductOrderId({
    imp_uid: 'imp_829275950993',
  });
  await productOrderIdParams.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 주문내역 상세조회 */
  const orderDetailParams = NaverPay.getOrderDetail({
    product_order_id: '2019101080337810',
  });
  await orderDetailParams.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

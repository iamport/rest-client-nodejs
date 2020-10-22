const { NaverCo } = require('../lib/request');

module.exports = async (iamport) => {
  /* 상품 발주 */
  const place = NaverCo.place({
    imp_uid: 'imp_474085849392',
    product_order_id: ['2019101461256650'],
  });
  await place.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 상품 발송 */
  const ship = NaverCo.ship({
    imp_uid: 'imp_474085849392',
    product_order_id: ['2019101461256650'],
    dispatched_at: 1577750400,
    delivery_method: 'NOTHING',
  });
  await ship.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 교환 승인 상품 재발송 */
  const shipExchanged = NaverCo.shipExchanged({
    imp_uid: 'imp_474085849392',
    product_order_id: ['2019101461256650'],
    delivery_method: 'NOTHING',
  });
  await shipExchanged.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 상품 반품 요청 */
  const requestReturn = NaverCo.requestReturn({
    imp_uid: 'imp_909917793094',
    product_order_id: ['2019101460921650'],
    reason: 'INTENT_CHANGED ',
    delivery_method: 'RETURN_INDIVIDUAL',
  });
  await requestReturn.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 상품 반품 보류 */
  const withholdReturn = NaverCo.withholdReturn({
    imp_uid: 'imp_909917793094',
    product_order_id: ['2019101460921650'],
    reason: 'RETURN_DELIVERYFEE_AND_EXTRAFEEE ',
    memo: '상품 반품 보류 테스트',
    extra_charge: 0,
  });
  await withholdReturn.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 상품 반품 보류 해제 */
  const resolveReturn = NaverCo.resolveReturn({
    imp_uid: 'imp_909917793094',
    product_order_id: ['2019101460921650'],
  });
  await resolveReturn.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 상품 반품 거절 */
  const rejectReturn = NaverCo.rejectReturn({
    imp_uid: 'imp_909917793094',
    product_order_id: ['2019101460921650'],
    memo: '상품 반품 거절 테스트',
  });
  await rejectReturn.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 상품 반품 승인 */
  const approveReturn = NaverCo.approveReturn({
    imp_uid: 'imp_909917793094',
    product_order_id: ['2019101460921650'],
    memo: '상품 반품 승인 테스트',
    extra_charge: 0,
  });
  await approveReturn.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 상품 환불 */
  const cancelParams = NaverCo.cancel({
    imp_uid: 'imp_474085849392',
    product_order_id: ['2019101461256650'],
    reason: 'SOLD_OUT',
  });
  await cancelParams.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 주문번호 조회 */
  const getProductOrderIds = NaverCo.getProductOrderIds({
    imp_uid: 'imp_829275950993',
  });
  await getProductOrderIds.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 주문내역 상세조회 */
  const orderDetailParams = NaverCo.getOrderDetail({
    product_order_id: '2019101080337810',
  });
  await orderDetailParams.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 구매평 조회 */
  const getReviews = NaverCo.getReviews({
    from: '1546300800',
    to: '1548892800',
    review_type: 'general',
  });
  await getReviews.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

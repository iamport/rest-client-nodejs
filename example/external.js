const { External } = require('../lib/request');

/* 아임포트 별개 현금결제 */
module.exports = async (iamport) => {
  /* 영수증 발급 */
  const postReceipts = External.postReceipt({
    merchant_uid: 'mid_123456789',
    name: 'iamport-resct-client-nodejs',
    amount: 1000,
    identifier: '01065791337',
    identifier_type: 'phone',
    type: 'person',
    buyer_name: 'deedee',
    buyer_email: 'example@example.com',
    tax_free: 0,
  });
  await postReceipts.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 영수증 조회*/
  const getReceipts = External.getReceipt({
    merchant_uid: 'mid_123456789',
  });
  await getReceipts.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 영수증 삭제 */
  const deleteReceipts = External.deleteReceipt({
    merchant_uid: 'mid_123456789',
  });
  await deleteReceipts.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

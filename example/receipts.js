const { Receipts } = require('../lib/request');

/* 현금영수증 */
module.exports = async (iamport) => {
  /* 발급 */
  const postReceipt = Receipts.postReceipt({
    imp_uid: 'imp_511034751340',
    identifier: '01065791337',
    identifier_type: 'phone',
    type: 'person',
    buyer_name: 'deedee',
    buyer_email: 'example@example.com',
    tax_free: 0,
  });
  await postReceipt.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 조회 */
  const getReceipt = Receipts.getReceipt({
    imp_uid: 'imp_511034751340',
  });
  await getReceipt.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 삭제 */
  const deleteReceipt = Receipts.deleteReceipt({
    imp_uid: 'imp_511034751340',
  });
  await deleteReceipt.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

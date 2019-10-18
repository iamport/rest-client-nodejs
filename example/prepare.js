const { Prepare } = require('../lib/request');

module.exports = async (iamport) => {
  /* 결제 예정 금액 등록 */
  const postAmount = Prepare.postAmount({
    merchant_uid: 'mid_1448280088556',
    amount: 1000,
  });
  await iamport.request(postAmount)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 결제 예정 금액 조회 */
  const getAmount = Prepare.getAmount({
    merchant_uid: 'mid_1448280088556',
  });
  await iamport.request(getAmount)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

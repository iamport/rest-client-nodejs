import { Banks } from '../lib/request';

module.exports = async (iamport) => {
  /* 모든 은행 정보 조회 */
  const getBanks = Banks.getBanks();
  await getBanks.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 특정 은행 정보 조회 */
  const getBank = Banks.getBank({
    code: '023',
  });
  await getBank.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

const { Cards } = require('../lib/request');

module.exports = async (iamport) => {
  /* 모든 카드사 정보 조회 */
  const getCards = Cards.getCards();
  await getCards.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 특정 카드사 정보 조회 */
  const getCard = Cards.getCard({
    code: '370',
  });
  await getCard.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

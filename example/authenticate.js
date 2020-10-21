import { Authenticate } from '../lib/request';

module.exports = async (iamport) => {
  /* 토큰 발급 */
  const getToken = Authenticate.getToken({
    imp_key: 'imp_apikey',
    imp_secret: 'ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f',
  });
  await getToken.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};

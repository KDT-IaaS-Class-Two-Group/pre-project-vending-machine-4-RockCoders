/** @jojayeon 24.06.21 
 *  * 구매 이벤트에 가져가서 구매 이벤트가 발생했을경우 작동
 *  * post 방식이고 fetch는 주소는 변경해야 합니다.
 */
export async function sendPurchaseRequest(name, price) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      price: price,
    }),
  };

  try {
    const response = await fetch('/api/purchase', requestOptions);
    if (!response.ok) {
      throw new Error('서버 오류: ' + response.statusText);
    }
    console.log('구매 성공');
  } catch (error) {
    console.error('오류 발생:', error);
  }
}
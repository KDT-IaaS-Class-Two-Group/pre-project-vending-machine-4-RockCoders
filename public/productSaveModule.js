/** 
 *  * 구매 이벤트에 가져가서 구매 이벤트가 발생했을경우 작동
 *  * post 방식이고 fetch는 주소는 변경해야 합니다.
 */
export function sendPurchaseRequest() {
  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          product: 'exampleProduct',
          name: 'exampleName',
          price: 1000
      })
  };

try {// ?'/api/purchase' 변경해야함
  const response = fetch('/api/purchase', requestOptions);
  // 우선 모르는 다 표기 ok - 응답 성공 200~290
  if (!response.ok) {
    throw new Error('서버 오류: ' + response.statusText);
  }
  console.log('구매 성공');
  } catch (error) {
    console.error('오류 발생:', error);
  }
}
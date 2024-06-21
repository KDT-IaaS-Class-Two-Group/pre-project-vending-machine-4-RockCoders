//* 1. 메뉴가 들어왔는지 확인 - 없으면 실행이 안되게
//* 2. 서버로 전송 fetch를 사용하고 post방식으로 한다.

function sendPurchaseRequest() {
  if(!purchaseBtn) {
    alert('먼저 제품을 선택하세요.');
    return;
  }
  const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        product: purchaseBtn.product,
        name: namepk,
        price: price,
      })
    };
    console.log(quantity)

  try {
      const response = fetch('/api/purchase', requestOptions);
      //우선 모르는 다 표기 ok - 응답 성공 200~290
      if (!response.ok) {
        throw new Error('서버 오류: ' + response.statusText);
      }
      console.log('구매 성공');
  } catch (error) {
      console.error('오류 발생:', error);
  }
};

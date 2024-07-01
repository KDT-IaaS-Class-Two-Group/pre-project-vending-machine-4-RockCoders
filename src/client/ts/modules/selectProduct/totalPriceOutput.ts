/**
 * * @jojayeon 24.06.25
 * * 총액 출력하는 함수
 * 저장해 놓은 총액 넘버를 가져와서 출력만 함
 * @param totalPrice - 총액 totalprice의 리턴값을 넣어준다. 또는 객체 변수 넣어주면됨  
 */

// displayTotalPrice.ts

export default function displayTotalPrice(totalPrice: number, paymentAmount: number): void {
  const totalPriceElement = document.getElementById('total-price') as HTMLUListElement | null;
  const messageElement = document.getElementById('message') as HTMLParagraphElement | null;

  if (totalPriceElement) {
    if (paymentAmount < totalPrice) {
      if (messageElement) {
        messageElement.innerText = '금액을 더 넣어 주세요';
      } else {
        console.error('message 요소가 존재하지 않습니다.');
      }
    } else {
      totalPriceElement.innerText = `총액: ${totalPrice}원`;
      if (messageElement) {
        messageElement.innerText = '';
      }
    }
  } else {
    console.error('total-price 요소가 존재하지 않습니다.');
  }
}

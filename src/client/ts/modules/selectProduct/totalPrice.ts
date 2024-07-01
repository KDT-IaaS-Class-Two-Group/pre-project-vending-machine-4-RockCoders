/** 
 * @jojayeon 24.06.25
 * *제품을 총액 계산 
 * @param selectedProducts -객체 변수 넣어주면됨  
 * @returns - totalPrice, 총액 출력
 */

// 객체 들어오면 product로 받아서 그 객체의 price의 가격만 덧셈하는 방식
// calculateTotalPrice.ts

export default (selectedProducts: { id: number, name: string, price: number }[]): number => {
  let totalPrice = 0;
  selectedProducts.forEach(product => {
    totalPrice += product.price;
  });
  return totalPrice;
}

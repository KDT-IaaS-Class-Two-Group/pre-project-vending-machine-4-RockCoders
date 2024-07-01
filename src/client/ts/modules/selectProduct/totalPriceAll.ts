// index.ts

import { ProductService } from '../amount/ProductService.js';
import totalPrice from './totalPrice.js';
import totalPriceOutput from './totalPriceOutput.js';

const productService = new ProductService();

export default async function totalPriceAll() {
  try {
    // 제품 데이터 가져오기
    const products = await productService.fetchProducts();

    // 총액 계산
    const totalPrice1 = totalPrice(products);

    // 총액을 화면에 표시
    totalPriceOutput(totalPrice1, 111110000); // 111110000 입금액 넣어주면 됨

  } catch (error) {
    console.error('Error loading and displaying products:', error);
  }
}

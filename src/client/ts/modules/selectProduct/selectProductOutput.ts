/** 
 * @jojayeon 24.06.25
 * * 선택한 제품 출력하는 함수
 * @param selectedProducts - 메뉴에 들어가 있는 객체 
 * @returns - selectedProducts 원래가져오 객체 리턴
 */

import { ProductService } from '../amount/ProductService.js';

class UIManager {
  updateProductList(selectedProducts: { id: number, name: string, price: number }[]): void {
    const productListElement = document.getElementById('productList') as HTMLUListElement;
    if (productListElement) {
      productListElement.innerHTML = ''; // 기존 목록 삭제
      selectedProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} : ${product.price}원`;
        productListElement.appendChild(li);
      });
    }
  }
}

const productService = new ProductService();
const uiManager = new UIManager();

export default async function() {
  try {
    const products = await productService.fetchProducts();
    uiManager.updateProductList(products);
  } catch (error) {
    console.error('Error loading and displaying products:', error);
  }
}
import { priceInput } from "./ts/modules/amount/priceInput.js";
import LocalStorageModel from "../localStorage/localStorage.js";
import selectProductOutput from "../client/ts/modules/selectProduct/selectProductOutput.js"
import totalPriceAll from '../client/ts/modules/selectProduct/totalPriceAll.js';

document.getElementById('money-button')?.addEventListener('click',priceInput);
const localStorageModel = new LocalStorageModel();

// document.getElementById('container1')?.addEventListener('click', () => {selectProductOutput()});
// document.getElementById('container1')?.addEventListener('click', () => {totalPriceAll()});
// container을 목찾음
document.getElementById('container1')?.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target.id === 'container1') {
    selectProductOutput();
    totalPriceAll();
  }
});
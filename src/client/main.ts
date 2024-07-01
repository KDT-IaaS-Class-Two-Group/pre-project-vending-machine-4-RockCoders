import { priceInput } from "./ts/modules/amount/priceInput.js";
import LocalStorageModel from "../localStorage/localStorage.js";
import selectProductOutput from "../client/ts/modules/selectProduct/selectProductOutput.js"
import totalPriceAll from '../client/ts/modules/selectProduct/totalPriceAll.js';

document.getElementById('money-button')?.addEventListener('click',priceInput);
const localStorageModel = new LocalStorageModel();

document.getElementById('container')?.addEventListener('click', () => {selectProductOutput()});
document.getElementById('container')?.addEventListener('click', () => {totalPriceAll()});
// container을 목찾음
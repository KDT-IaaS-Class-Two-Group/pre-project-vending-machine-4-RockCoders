import CreateFormManager from "./ts/modules/addProduct/createFormManager.js";
import DeleteFormManager from "./ts/modules/deleteProduct/deleteFormManager.js";
import ReportButtonManager from "./ts/modules/reportHandle/reportAreaManager.js";
import UpdateFormManager from "./ts/modules/updateProduct/updateFormManager.js";

document.addEventListener('DOMContentLoaded', () => {
  new CreateFormManager();
  new UpdateFormManager();
  new DeleteFormManager();
  new ReportButtonManager();
});
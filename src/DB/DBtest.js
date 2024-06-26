import DBConnector from "./DBConnector.js";
import TableCreator from "./modules/table/TableCreator.js";
import ReadData from "./modules/manipulation/ReadData.js";
import createData from "./modules/manipulation/CreateData.js";
import AddColumn from "./modules/table/column/AddColumn.js";
import DropColumn from "./modules/table/column/DropColumn.js";
import BeginTransaction from "./modules/transaction/TransactionController.js";
import GetTableInfo from "./modules/table/GetTableInfo.js";
import BackUpNowDB from "./modules/backup/BackUpNowDB.js";
import RestoreDBFromBackUp from "./modules/backup/RestoreDBFromBackUp.js";
import DeleteData from "./modules/manipulation/DeleteData.js";
import GetDBSize from "./modules/utilities/GetDBSize.js";
import OptimizeDB from "./modules/utilities/OptimizeDB.js";
import CreateIndex from "./modules/index/CreateIndex.js";
import DropIndex from "./modules/index/DropIndex.js";
import GetAllIndexes from "./modules/index/GetAllIndexes.js";
import GetSomeIndexes from "./modules/index/GetSomeIndexes.js";
import ReorderColumns from "./modules/table/column/ReorderColumns.js";
import DBCloser from "./DBCloser.js";

// new ReorderColumns(`test.db`).reorderColumns(`test_tble`, {
//   age: `TEXT`,
//   name: `INTEGER`,
// });
const optimizer = new OptimizeDB(`test.db`);
optimizer.db.serialize(() => {
  optimizer.optimizeDB();
  optimizer.close();
  optimizer.optimizeDB();
});

// new CreateIndex(`test.db`).createIndex(`test_index2`, `test_tble`, `name`);

// new GetSomeIndexes(`test.db`).getSomeIndexes(`test_tble`, `age`);
// new GetAllIndexes(`test.db`).getAllIndexes(`test_tble`);

// new DropIndex(`test.db`).dropIndex(`test_index`);

// new GetSomeIndexes(`test.db`).getSomeIndexes(`test_tble`, `name`);

// new OptimizeDB(`test.db`).optimizeDB();

const check = new GetDBSize(`tset.db`);

// check.getDBSize();

const restorer = new RestoreDBFromBackUp(`test.db`);
const droperAll = new DeleteData(`test.db`);

// droperAll.deleteRecordsAll(`test_tble`);

// restorer.restoreDBFromBackup(`backup_test.db`, `test_tble`);

// const budb = new BackUpNowDB(`test.db`);

// budb.backupDB(`backup_test.db`);

const tableInfo = new GetTableInfo(`test.db`);
// console.log(tableInfo);
// tableInfo.getTableInfo(`test_tble`, true);
const beginTransaction = new BeginTransaction(`test.db`);
// beginTransaction.beginTransaction(() => {
//   //   adder.addColumn(`test_tble`, `age`, "TEXT");
//   //   beginTransaction.commit();
//   beginTransaction.rollback();
//   //   rollback.rollback();
// });

const reader = new ReadData(`test.db`);
const creator = new createData(`test.db`);
const adder = new AddColumn(`test.db`);
const drop = new DropColumn(`test.db`);

// creator.createRecord(`test_tble`, { name: `테스트1` });
// reader.readRecordsAll(`test_tble`, true);

// adder.addColumn(`test_tble`, `age`, "TEXT");
// drop.dropColumn(`test_tble`, `age`);

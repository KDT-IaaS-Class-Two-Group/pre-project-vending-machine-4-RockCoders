import DataBaseManager from "./modules/DBMANAGER.js";

const test = new DataBaseManager(`123.db`);

test.db.serialize(() => {
  const constants = DataBaseManager.getDefaultColumnProperties();

  const columns = {
    id: "INTEGER",
    name: "TEXT",
    age: "INTEGER",
    city: "TEXT",
  };

  test.createTable(`test_tbl`, columns);
});

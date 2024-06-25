import DataBaseManager from "./modules/DBMANAGER.js";

const test = new DataBaseManager(`123.db`);

test.db.serialize(() => {
  //   const constants = DataBaseManager.getDefaultColumnProperties();
  //   const idConstants = constants;
  //   constants.primaryKey = true;
  //   console.log(constants);
  const idConstants = DataBaseManager.getDefaultConstants();
  idConstants.type.INTEGER = true;
  idConstants.primaryKey = true;
  idConstants.autoIncrement = true;

  const nameConstants = DataBaseManager.getDefaultConstants();
  nameConstants.foreignKey.referencedTable = `test_tbl`;
  nameConstants.foreignKey.referencedColumn = `name`;
  console.log(DataBaseManager.someMethod(nameConstants));

  // console.log(DataBaseManager.someMethod(idConstants));
  const columns = {
    id: DataBaseManager.someMethod(idConstants),
    name: `TEXT ${DataBaseManager.someMethod(nameConstants)}`,
    age: "INTEGER",
    city: "TEXT",
  };
  test.createTable(`test_tbl5`, columns);
});

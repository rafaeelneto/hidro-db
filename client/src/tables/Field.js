class Field {
  constructor(label, table_name, isMain, present, onTable, getValue) {
    this.label = label;
    this.table_name = table_name;
    this.isMain = isMain;
    this.present = present;
    this.onTable = onTable;
    this.getValue = getValue;
  }

  static getGraphQlVariable = (fields) => `
    ${fields
      .filter((item) => !item.isMain)
      .map((item) => {
        return ` $${item.table_name}: Boolean!`;
      })}
  `;

  static getVariableActive = (fields) => {
    const obj = {};
    fields
      .filter((item) => !item.isMain)
      .map((item) => {
        obj[item.table_name] = item.present;
      });
    return obj;
  };

  static normalizerEnum(enum_table) {
    const enum_tableNrz = {};
    enum_table.map((item) => {
      enum_tableNrz[item.nome] = item.label;
    });
    return enum_tableNrz;
  }
}

export default Field;

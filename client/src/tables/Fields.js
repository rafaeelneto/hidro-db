class Fields {
  constructor(fields) {
    this.fields = fields;
  }

  getGraphQlVariable = () => `
    ${this.fields
      .filter((item) => !item.isMain)
      .map((item) => {
        return ` $${item.table_name}: Boolean!`;
      })}
  `;

  getVariableActive = (fields) => {
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

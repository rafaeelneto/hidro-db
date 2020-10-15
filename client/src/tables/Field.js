/**
THIS CLASS DEFINES A MODEL TO ALL THE FIELDS INTO THE APPLICATION TO BE SHOW.
THE PROPERTIES INCLUDES:
  label -- STORES THE LABEL TO BE SHOWN TO THE USER
  table_name -- STORES THE TABLE NAME ON THE DATABASE
  isMain -- IF THAT FIELD IS THE MAIN ONE TO BE SHOWN ON FIRST COLLUMN OR THE THE TITLE OF DETAILS PAGE
  present -- IF THE FIELD MUST BE SHOW ON TABLE VIEW
  onTable -- IF THE TABLE SHOULD BE SHOWN ON TABLE OR NOT (false TO FIELDS THAT ONLY ARE SHOWN INTO DETAILS PAGE)
  getValue -- FUNCTION THAT RETURNS THE VALUE OF THE FIELD AND MAKES TREATMENTS LIKE FORMAT DATES ETC
*/

class Field {
  constructor(label, table_name, isMain, isPresent, onTable, getValue) {
    this.label = label;
    this.table_name = table_name;
    this.isMain = isMain;
    this.table_properties = {
      isPresent,
      onTable,
    };
    this.present = isPresent;
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

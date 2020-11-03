class Fields {
  constructor(
    label,
    columnName,
    isMain,
    onTable,
    onlyTable,
    onlyDetails,
    query,
    mutation,
    getValue,
    component,
  ) {
    this.label = label;
    this.columnName = columnName;
    this.isMain = isMain;
    this.onTable = onTable;
    this.onlyTable = onlyTable;
    this.onlyDetails = onlyDetails;
    this.query = query;
    this.mutation = mutation;
    this.getValue = getValue;
    this.component = component;
  }
}

export default Fields;

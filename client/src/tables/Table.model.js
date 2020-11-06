// Model class to all main tables

class Table {
  constructor(
    tableName,
    previewComponent,
    fields,
    fieldOrder,
    getGIS,
    statistics,
    queries,
    mutations,
  ) {
    this.tableName = tableName;
    this.previewComponent = previewComponent;
    this.fields = fields;
    this.fieldOrder = fieldOrder;
    this.getGIS = getGIS;
    this.statistics = statistics;
    this.queries = queries;
    this.mutations = mutations;
  }
}

export default Table;

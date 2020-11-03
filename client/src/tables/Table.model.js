// Model class to all main tables

class Table {
  constructor(
    tableName,
    previewComponent,
    fields,
    getGIS,
    statistics,
    queries,
    mutations,
  ) {
    this.table_name = tableName;
    this.previewComponent = previewComponent;
    this.fields = fields;
    this.getGIS = getGIS;
    this.statistics = statistics;
    this.queries = queries;
    this.mutations = mutations;
  }
}

export default Table;

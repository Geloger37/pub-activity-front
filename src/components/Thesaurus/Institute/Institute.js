import React, { Component } from 'react'
import DataGrid, { Column, Editing, Paging } from 'devextreme-react/data-grid'
import DataSource from 'devextreme/data/data_source'
import axios from 'axios'

//data = [{"idInstitute" : 34, "nameInstitute" : "hkjsdhjk"}]

export default class Institute extends Component {
  

  render () {
    return (
      <div style={{ margin: 'auto', width: '60%', marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Институты</h1>
        <DataGrid
          id='gridContainer'
          dataSource= { new DataSource(
            {
              key: 'idInstitute',
              loadMode: 'processed',
              load : function (loadOptions) {
                  return axios.get('http://localhost:3002/institute')
                              .then(res => { return JSON.stringify(res.data); })
                              .catch( e => { throw e;} );
              }
              /*update : function() {
                axios.get('http://localhost:3002/institute').then(res => { JSON.stringify(res.data)});
                return this.data;
              }*/
              
            } )}
          keyExpr="idInstitute"
          //allowColumnReordering
          showBorders
          //onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          //onRowInserting={this.onRowInserting}
          //onRowInserted={this.onRowInserted}
          //onRowUpdating={this.onRowUpdating}
          //onRowUpdated={this.onRowUpdated}
          //onRowRemoving={this.onRowRemoving}
          //onRowRemoved={this.onRowRemoved}
          remoteOperations={true}
        >

          <Paging enabled />
          <Editing
                mode='row'
                allowUpdating
                allowDeleting
                allowAdding
                useIcons
              />

          <Column dataField='idInstitute' caption='ID' width={50} visible={false} />
          <Column dataField='nameInstitute' caption='Название института' />

        </DataGrid>

      </div>
    )
  }
}

import React from 'react'
import DataGrid, { Column, Editing, FilterRow, Paging } from 'devextreme-react/data-grid'
import DataSource from 'devextreme/data/data_source'
import axios from 'axios'

export default class Institute extends React.Component {
  
  constructor() {
    super()
    this.state = {
      data: []
    };
  }

  render () {
    return (
      <div style={{ margin: 'auto', width: '60%', marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Институты</h1>
        <DataGrid
          id='gridContainer'
          dataSource= { new DataSource(
            {
              loadMode: 'raw',
              dataSource: this.state.data,
              
              load : function (loadOptions) {
                return axios.get("/institute")
                            .then(res => {
                              return res.data;
                            })
                            .catch( e => { throw e} );
              },
              insert: function(values) {
                return axios.post("/institute", {
                              name: values.nameInstitute
                            })
                            .then(res => {
                              return res
                            })
                            .catch(e => {
                              throw e
                            })
              },
              update: function(key, values) {
                return axios.put("/institute", {
                              id: key.idInstitute,
                              name: values.nameInstitute,
                            })
                            .then(res => {
                              return res
                            })
                            .catch(e => {
                              throw e
                            })
              },
              remove: function(key) {
                return axios.delete("/institute", {
                              data: {id: key.idInstitute},
                            })
                            .then(res => {
                              return res
                            })
                            .catch(e => {
                              throw 'Вы пытаетесь удалить элемент, который присутствует в другой таблице!'
                            })
              }
            } ) }
            
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
          <FilterRow visible={true}/>
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

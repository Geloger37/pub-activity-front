import React, {Component} from 'react'
import DataGrid, {Column, Editing, FilterRow, Paging} from "devextreme-react/data-grid";
import DataSource from 'devextreme/data/data_source'
import axios from 'axios'


export default class Title extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        };
    }

    

    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Ученые звания</h1>

                <DataGrid
                    id={'gridContainer'}
                    dataSource={ new DataSource(
                        {
                          loadMode: 'raw',
                          dataSource: this.state.data,
                          
                          load : function (loadOptions) {
                            return axios.get("/sci_rank")
                                        .then(res => {
                                          return res.data;
                                        })
                                        .catch( e => { throw e} );
                          },
                          insert: function(values) {
                            return axios.post("/sci_rank", {
                                          name: values.name_sci_rank
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw e
                                        })
                          },
                          update: function(key, values) {
                            return axios.put("/sci_rank", {
                                          id: key.idSciRank,
                                          name: values.name_sci_rank,
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw e
                                        })
                          },
                          remove: function(key) {
                            return axios.delete("/sci_rank", {
                                          data: {id: key.idSciRank},
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw 'Вы пытаетесь удалить элемент, который присутствует в другой таблице!'
                                        })
                          }
                        } ) }
                    keyExpr={'idSciRank'}
                    allowColumnReordering={true}
                    showBorders={true}
                    onEditingStart={this.onEditingStart}
                    onInitNewRow={this.onInitNewRow}
                    onRowInserting={this.onRowInserting}
                    onRowInserted={this.onRowInserted}
                    onRowUpdating={this.onRowUpdating}
                    onRowUpdated={this.onRowUpdated}
                    onRowRemoving={this.onRowRemoving}
                    onRowRemoved={this.onRowRemoved}>


                    <FilterRow visible={true}/>
                    <Paging enabled={true}/>
                    <Editing
                        mode={'row'}
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                        useIcons={true}/>

                    <Column dataField={'idSciRank'} caption={'id'} width={50} visible={false}/>
                    <Column dataField={'name_sci_rank'} caption={'Наименование ученого звания'}/>

                </DataGrid>
            </div>
        )
    }
}
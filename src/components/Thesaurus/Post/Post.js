import React, {Component} from 'react'
import DataGrid, {Column, Editing, FilterRow, Paging} from "devextreme-react/data-grid";
import DataSource from "devextreme/data/data_source"
import axios from "axios"

export default class Post extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Должности</h1>
                <DataGrid
                    id={'gridContainer'}
                    dataSource={new DataSource(
                        {
                          loadMode: 'raw',
                          dataSource: this.state.data,
                          
                          load : function (loadOptions) {
                            return axios.get("/post")
                                        .then(res => {
                                          return res.data;
                                        })
                                        .catch( e => { throw e} );
                          },
                          insert: function(values) {
                            if( (typeof values.postName !== 'undefined') && (typeof values.minPlanValue !== 'undefined'))
                            return axios.post("/post", {
                                          name: values.postName,
                                          val: values.minPlanValue
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw e
                                        })
                          },
                          update: function(key, values) {
                            return axios.put("/post", {
                                          id: key.idPost,
                                          name: (typeof values.postName !== 'undefined' ? values.postName : key.postName),
                                          val: (typeof values.minPlanValue !== 'undefined' ? values.minPlanValue : key.minPlanValue),
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw e
                                        })
                          },
                          remove: function(key) {
                            return axios.delete("/post", {
                                          data: {id: key.idPost},
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw 'Вы пытаетесь удалить элемент, который присутствует в другой таблице!'
                                        })
                          }
                        } )}
                    keyExpr={'id'}
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

                    <Column dataField={'idPost'} caption={'id'} width={50} visible={false}/>
                    <Column dataField={'postName'} caption={'Наименование должности'}/>
                    <Column dataField={'minPlanValue'} caption={"Минимальный план"} width={200}/>
                </DataGrid>
            </div>
        )
    }
}
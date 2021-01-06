import React, {Component} from 'react'
import DataGrid, {Column, Editing, Paging} from "devextreme-react/data-grid";
import DataSource from "devextreme/data/data_source"
import axios from "axios"

import {post} from "./data";

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
                                          throw e
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
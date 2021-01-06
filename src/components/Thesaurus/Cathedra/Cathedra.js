import React, {Component} from 'react'
import DataGrid, {Column, Editing, FilterRow, Lookup, Paging} from "devextreme-react/data-grid";
import DataSource from 'devextreme/data/data_source'
import axios from 'axios'


export default class Cathedra extends Component {

    constructor() {
        super()
        this.state = {
          cathedra: [],
          institute: []
        };
      }

    componentDidMount() {
        axios.get("/institute")
            .then(res => {
                this.setState( {institute: res.data} )
            })
            .catch(e => {
              throw e
            })
    }

    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Кафедры</h1>
                <DataGrid
                    id={'gridContainer'}
                    dataSource={ new DataSource(
                        {
                          loadMode: 'raw',
                          dataSource: this.state.cathedra,
                          
                          load : function (loadOptions) {
                            return axios.get("/cathedra")
                                        .then(res => {
                                          return res.data;
                                        })
                                        .catch( e => { throw e} );
                          },
                          insert: function(values) {
                            if( (typeof values.nameCathedra !== 'undefined') && (typeof values.idInstitute !== 'undefined'))
                            return axios.post("/cathedra", {
                                          name: values.nameCathedra,
                                          id: values.idInstitute
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw e
                                        })
                          },
                          update: function(key, values) {
                            return axios.put("/cathedra", {
                                          id: key.idCathedra,
                                          name: (typeof values.nameCathedra !== 'undefined' ? values.nameCathedra : key.nameCathedra),
                                          idInst: (typeof values.idInstitute !== 'undefined' ? values.idInstitute : key.idInstitute),
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw e
                                        })
                          },
                          remove: function(key) {
                            return axios.delete("/cathedra", {
                                          data: {id: key.idCathedra},
                                        })
                                        .then(res => {
                                          return res
                                        })
                                        .catch(e => {
                                          throw 'Вы пытаетесь удалить элемент, который присутствует в другой таблице!'
                                        })
                          }
                        } ) }
                    keyExpr={'idCathedra'}
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

                    <Column dataField={'idCathedra'} caption={'ID'} width={50} visible={false}/>
                    <Column dataField={'nameCathedra'} caption={'Название Кафедры'}/>
                    <Column dataField={'idInstitute'} caption={'Название инстиута'}>
                        <Lookup dataSource={this.state.institute} valueExpr={'idInstitute'} displayExpr={'nameInstitute'}/>
                    </Column>

                </DataGrid>
            </div>
        )
    }
}
import React, {Component} from 'react'
import DataGrid, {Column, Editing, FilterRow, Form, Lookup, Paging} from "devextreme-react/data-grid";
import {Item} from "devextreme-react/form"
import DataSource from 'devextreme/data/data_source'
import axios from 'axios'

export default class Employees extends Component {

    constructor() {
        super()
        this.state = {
            employee: [],
            cathedra: [],
            degree: [],
            post: [],
            title: [],
        }
    }

    componentDidMount() {
        
        axios.get("/cathedra")
            .then(res => {
                this.setState( {cathedra: res.data} )
            })
            .catch(e => {
                throw e
            })
        
        axios.get("/sci_rank")
            .then(res => {
                this.setState( {title: res.data} )
            })
            .catch(e => {
                throw e
            })

        axios.get("/post")
            .then(res => {
                this.setState( {post: res.data} )
            })
            .catch(e => {
                throw e
            })
            
        axios.get("/degree")
            .then(res => {
                this.setState( {degree: res.data} )
            })
            .catch(e => {
                throw e
            })
    }

    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Сотрудники</h1>
                <DataGrid
                    id={'gridContainer'}
                    dataSource={new DataSource(
                                {
                                  loadMode: 'raw',
                                  dataSource: this.state.employee,
                                
                                  load : function (loadOptions) {
                                    return axios.get("/employee")
                                                .then(res => {
                                                  return res.data;
                                                })
                                                .catch( e => { throw e} );
                                  },
                                  insert: function(values) {
                                    if( 
                                        (typeof values.FIO !== 'undefined') && 
                                        (typeof values.idCathedra !== 'undefined') &&
                                        (typeof values.idSciRank !== 'undefined') &&
                                        (typeof values.idPost !== 'undefined') &&
                                        (typeof values.status !== 'undefined') 
                                    )
                                    return axios.post("/employee", {
                                                  idcath: values.idCathedra,
                                                  idrank: values.idSciRank,
                                                  fio: values.FIO,
                                                  iddegree: values.idDegree,
                                                  idpost: values.idPost,
                                                  status: values.status,
                                                })
                                                .then(res => {
                                                  return res
                                                })
                                                .catch(e => {
                                                  throw e
                                                })
                                  },
                                  update: function(key, values) {
                                    return axios.put("/employee", {
                                                  id: key.idEmployee,
                                                  idcath: (typeof values.idCathedra !== 'undefined' ? values.idCathedra : key.idCathedra),
                                                  idrank: (typeof values.idSciRank !== 'undefined' ? values.idSciRank : key.idSciRank),
                                                  fio: (typeof values.FIO !== 'undefined' ? values.FIO : key.FIO),
                                                  iddegree: (typeof values.idDegree !== 'undefined' ? values.idDegree : key.idDegree),
                                                  idpost: (typeof values.idPost !== 'undefined' ? values.idPost : key.idPost),
                                                  status: (typeof values.status !== 'undefined' ? values.status : key.status),
                                                })
                                                .then(res => {
                                                  return res
                                                })
                                                .catch(e => {
                                                  throw e
                                                })
                                  },
                                  remove: function(key) {
                                    return axios.delete("/employee", {
                                                  data: {id: key.idEmployee},
                                                })
                                                .then(res => {
                                                  return res
                                                })
                                                .catch(e => {
                                                  throw e
                                                })
                                  }
                                } )}
                    keyExpr={'idEmployee'}
                    allowColumnReordering={true}
                    showBorders={true}
                    // onEditingStart={this.onEditingStart}
                    // onInitNewRow={this.onInitNewRow}
                    // onRowInserting={this.onRowInserting}
                    // onRowInserted={this.onRowInserted}
                    // onRowUpdating={this.onRowUpdating}
                    // onRowUpdated={this.onRowUpdated}
                    // onRowRemoving={this.onRowRemoving}
                    // onRowRemoved={this.onRowRemoved}
                    >
                    
                    <FilterRow visible={true}/>
                    <Paging enabled={true}/>
                    <Editing
                        mode={'form'}
                        editRowKey={false}
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                        useIcons={true}>
                        <Form>
                            <Item dataField="FIO"/>
                            <Item dataField="idCathedra"/>
                            <Item dataField="idSciRank"/>
                            <Item dataField="idDegree"/>
                            <Item dataField="idPost"/>
                            <Item dataField="status"/>
                        </Form>
                    </Editing> 

                    <Column dataField={'idEmployee'} caption={'id'} width={50} visible={false}/>
                    <Column dataField={'FIO'} caption={'ФИО сотрудника'}/>
                    <Column dataField={'idCathedra'} caption={'Кафедра'}>
                        <Lookup dataSource={this.state.cathedra} valueExpr={'idCathedra'} displayExpr={'nameCathedra'}/>
                    </Column>
                    <Column dataField={'idSciRank'} caption={'Ученое звание'}>
                        <Lookup dataSource={this.state.title} valueExpr={'idSciRank'} displayExpr={'name_sci_rank'}/>
                    </Column>
                    <Column dataField={'idDegree'} caption={'Ученая степень'}>
                        <Lookup dataSource={this.state.degree} valueExpr={'idDegree'} displayExpr={'nameDegree'}/>
                    </Column>                    
                    <Column dataField={'idPost'} caption={'Должность'}>
                        <Lookup dataSource={this.state.post} valueExpr={'idPost'} displayExpr={'postName'}/>
                    </Column>
                    <Column dataField={'status'} caption={'Статус'}/>
                </DataGrid>
            </div>
        )
    }
}
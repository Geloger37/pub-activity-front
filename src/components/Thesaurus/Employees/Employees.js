import React, {Component} from 'react'
import DataGrid, {Column, Editing, Lookup, Paging} from "devextreme-react/data-grid";

import {cathedras, degrees, employees, titles} from "./data";
import {post} from "../Post/data";

export default class Employees extends Component {
    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Сотрудники</h1>
                <DataGrid
                    id={'gridContainer'}
                    dataSource={employees}
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
                        mode={'form'}
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                        useIcons={true}/>

                    <Column dataField={'id'} caption={'id'} width={50} visible={false}/>
                    <Column dataField={'FIO'} caption={'ФИО сотрудника'}/>
                    <Column dataField={'idCathedra'} caption={'Кафедра'}>
                        <Lookup dataSource={cathedras} valueExpr={'id'} displayExpr={'cathedraName'}/>
                    </Column>
                    <Column dataField={'idDegree'} caption={'Ученая степень'}>
                        <Lookup dataSource={degrees} valueExpr={'id'} displayExpr={'degreeName'}/>
                    </Column>
                    <Column dataField={'idTitle'} caption={'Ученое звание'}>
                        <Lookup dataSource={titles} valueExpr={'id'} displayExpr={'title'}/>
                    </Column>
                    <Column dataField={'idPost'} caption={'Должность'}>
                        <Lookup dataSource={post} valueExpr={'id'} displayExpr={'postName'}/>
                    </Column>
                </DataGrid>
            </div>
        )
    }
}
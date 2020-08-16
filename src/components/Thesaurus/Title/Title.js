import React, {Component} from 'react'
import DataGrid, {Column, Editing, Paging} from "devextreme-react/data-grid";

import {titles} from "./data";

export default class Title extends Component {
    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Ученые звания</h1>

                <DataGrid
                    id={'gridContainer'}
                    dataSource={titles}
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

                    <Column dataField={'id'} caption={'id'} width={50} visible={false}/>
                    <Column dataField={'title'} caption={'Наименование ученого звания'}/>

                </DataGrid>
            </div>
        )
    }
}
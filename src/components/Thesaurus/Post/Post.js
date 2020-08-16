import React, {Component} from 'react'
import DataGrid, {Column, Editing, Paging} from "devextreme-react/data-grid";

import {post} from "./data";

export default class Post extends Component {
    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Должности</h1>
                <DataGrid
                    id={'gridContainer'}
                    dataSource={post}
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
                    <Column dataField={'postName'} caption={'Наименование должности'}/>
                </DataGrid>
            </div>
        )
    }
}
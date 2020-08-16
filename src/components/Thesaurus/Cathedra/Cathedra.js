import React, {Component} from 'react'
import DataGrid, {Column, Editing, Lookup, Paging} from "devextreme-react/data-grid";

import {cathedra, institute} from "./data";

export default class Cathedra extends Component {
    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Кафедры</h1>
                <DataGrid
                    id={'gridContainer'}
                    dataSource={cathedra}
                    keyExpr={'ID'}
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

                    <Column dataField={'ID'} caption={'ID'} width={50} visible={false}/>
                    <Column dataField={'CathedraName'} caption={'Название Кафедры'}/>
                    <Column dataField={'InstituteID'} caption={'Название инстиута'}>
                        <Lookup dataSource={institute} valueExpr={'ID'} displayExpr={'InstituteName'}/>
                    </Column>

                </DataGrid>
            </div>
        )
    }
}
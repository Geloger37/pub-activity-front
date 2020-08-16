import React, {Component} from 'react';
import DataGrid, {Column, Editing, Paging} from 'devextreme-react/data-grid';

import {institute} from './data.js';

export default class Institute extends Component {

    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Институты</h1>
                <DataGrid
                    id={'gridContainer'}
                    dataSource={institute}
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
                    onRowRemoved={this.onRowRemoved}
                    remoteOperations={true}>

                    <Paging enabled={true}/>
                    <Editing
                        mode={'row'}
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                        useIcons={true}/>

                    <Column dataField={'ID'} caption={'ID'} width={50} visible={false}/>
                    <Column dataField={'InstituteName'} caption={'Название инстиута'}/>

                </DataGrid>

            </div>
        );
    }
}

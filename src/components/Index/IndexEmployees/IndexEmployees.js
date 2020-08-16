import React, {Component} from "react";
import DataGrid, {Column, FilterRow, HeaderFilter} from "devextreme-react/data-grid";
import service from "./data";

export default class IndexEmployees extends Component {

    constructor(props) {
        super(props);
        this.indexEmployees = service.getEmpIndex();
        this.applyFilterTypes = [{
            key: 'auto',
            name: 'Immediately'
        }, {
            key: 'onClick',
            name: 'On Button Click'
        }];
        this.saleAmountHeaderFilter = [{
            text: 'Less than $3000',
            value: ['SaleAmount', '<', 3000]
        }, {
            text: '$3000 - $5000',
            value: [
                ['SaleAmount', '>=', 3000],
                ['SaleAmount', '<', 5000]
            ]
        }, {
            text: '$5000 - $10000',
            value: [
                ['SaleAmount', '>=', 5000],
                ['SaleAmount', '<', 10000]
            ]
        }, {
            text: '$10000 - $20000',
            value: [
                ['SaleAmount', '>=', 10000],
                ['SaleAmount', '<', 20000]
            ]
        }, {
            text: 'Greater than $20000',
            value: ['SaleAmount', '>=', 20000]
        }];
        this.state = {
            showFilterRow: true,
            showHeaderFilter: true,
            currentFilter: this.applyFilterTypes[0].key
        };
        this.dataGrid = null;
        this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
        this.onShowFilterRowChanged = this.onShowFilterRowChanged.bind(this);
        this.onShowHeaderFilterChanged = this.onShowHeaderFilterChanged.bind(this);
        this.onCurrentFilterChanged = this.onCurrentFilterChanged.bind(this);
    }
    orderHeaderFilter(data) {
        data.dataSource.postProcess = (results) => {
            results.push({
                text: 'Weekends',
                value: 'weekends'
            });
            return results;
        };
    }
    onShowFilterRowChanged(e) {
        this.setState({
            showFilterRow: e.value
        });
        this.clearFilter();
    }
    onShowHeaderFilterChanged(e) {
        this.setState({
            showHeaderFilter: e.value
        });
        this.clearFilter();
    }
    onCurrentFilterChanged(e) {
        this.setState({
            currentFilter: e.value
        });
    }
    clearFilter() {
        this.dataGrid.instance.clearFilter();
    }

    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Индексы публикационной активности</h1>
                <DataGrid
                    id={'grid'}
                    dataSource={this.indexEmployees}
                    showBorders={true}>
                    <FilterRow visible={this.state.showFilterRow}
                               applyFilter={this.state.currentFilter} />
                    <HeaderFilter visible={this.state.showHeaderFilter} />
                    <Column dataField={'id'} visible={false}/>
                    <Column dataField={'EmpName'} caption={'ФИО преподавателя'}/>
                    <Column dataField={'EmpIndex'} caption={'Индекс ПА преподавателя'}/>
                    <Column dataField={'Period'} caption={'Отчетный период'} alignment={'center'}/>
                </DataGrid>
            </div>
        )
    }
}
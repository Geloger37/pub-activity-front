import React, {Component} from 'react'
import DataGrid, {
    Column,
    Editing,
    Popup,
    Paging,
    Position,
    Form
} from "devextreme-react/data-grid";
import {Item} from 'devextreme-react/form';
import {addExisting} from "./data";

export default class Existing extends Component {
    render() {
        return (
            <div style={{margin: "auto", width: "60%", marginTop: "100px"}}>
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Добавление показателей публикационной активности
                    для существующего сотрудника</h1>

                <DataGrid
                    id={'gridContainer'}
                    dataSource={addExisting}
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
                        mode={'popup'}
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                        useIcons={true}
                    >
                        <Popup title={'Добавить показатели публикационной активности'} showTitle={true} width={900} height={525}>
                            <Position my={'center'} at={'center'} of={window}/>
                        </Popup>
                        <Form>
                            <Item itemType={'group'} colCount={1} colSpan={2}>
                                <Item dataField={'FIO'}/>
                                <Item dataField={'pubElibrary'}/>
                                <Item dataField={'pubRinc'}/>
                                <Item dataField={'pubRincCore'}/>
                                <Item dataField={'pubForeignJournals'}/>
                                <Item dataField={'pubRusJournals'}/>
                                <Item dataField={'pubRusVakJournals'}/>
                                <Item dataField={'pubRusTranslateJournals'}/>
                                <Item dataField={'pubNotNullImpact'}/>
                                <Item dataField={'pubLastFiveYears'}/>
                                <Item dataField={'pubMiddleImpactFactor'}/>
                                <Item dataField={'pubQuantityMonography'}/>
                                <Item dataField={'pubScopus'}/>
                                <Item dataField={'pubWos'}/>
                                <Item dataField={'citElibrary'}/>
                                <Item dataField={'citRinc'}/>
                                <Item dataField={'citRincCore'}/>
                                <Item dataField={'citPubCitAuthor'}/>
                                <Item dataField={'citRefMostCit'}/>
                                <Item dataField={'citPubCitEvenOnce'}/>
                                <Item dataField={'citMiddleQuantityForOnePub'}/>
                                <Item dataField={'citSelfCit'}/>
                                <Item dataField={'citQuantityCitByCoAuthor'}/>
                                <Item dataField={'citQuantityCoAuthor'}/>
                                <Item dataField={'citForeignJournals'}/>
                                <Item dataField={'citRusJournals'}/>
                                <Item dataField={'citRusVakJournals'}/>
                                <Item dataField={'cirRusTranslateJournals'}/>
                                <Item dataField={'citQuantityFromJournalsNotNullImpact'}/>
                                <Item dataField={'citMiddleImpact'}/>
                                <Item dataField={'citQuantityCitPubInLastFiveYears'}/>
                                <Item dataField={'citQuantityAllPubLastFiveYears'}/>
                                <Item dataField={'citScopus'}/>
                                <Item dataField={'citWos'}/>
                                <Item dataField={'hirshElibrary'}/>
                                <Item dataField={'hirshRinc'}/>
                                <Item dataField={'hirshRincCore'}/>
                                <Item dataField={'hirshWithoutSelfCit'}/>
                                <Item dataField={'hirshOnlyFromPubInJournals'}/>
                                <Item dataField={'hirshScopus'}/>
                                <Item dataField={'hirshWos'}/>

                            </Item>
                        </Form>
                    </Editing>

                    <Column dataField={'id'} caption={'id'} width={50} visible={false}/>
                    <Column dataField={'FIO'} caption={'ФИО сотрудника'}/>
                    <Column dataField={'pubElibrary'} caption={'Число публикаций на elibrary.ru'} visible={false}/>
                    <Column dataField={'pubRinc'} caption={'Число публикаций в ринц'} visible={false}/>
                    <Column dataField={'pubRincCore'} caption={'Число публикаций, входящих в ядро ринц'}
                            visible={false}/>
                    <Column dataField={'pubForeignJournals'} caption={'Число статей в зарубежных журналах'}
                            visible={false}/>
                    <Column dataField={'pubRusJournals'} caption={'Число статей в российских журналах'}
                            visible={false}/>
                    <Column dataField={'pubRusVakJournals'}
                            caption={'Число статей в российских журналах из перечня вак'} visible={false}/>
                    <Column dataField={'pubRusTranslateJournals'}
                            caption={'Число статей в российских переводных журналах'} visible={false}/>
                    <Column dataField={'pubNotNullImpact'}
                            caption={'Число статей в журналах с ненулевым импакт-фактором'} visible={false}/>
                    <Column dataField={'pubLastFiveYears'} caption={'Число публикаций за последние пять лет'}
                            visible={false}/>
                    <Column dataField={'pubMiddleImpactFactor'}
                            caption={'Средневзвешенный импакт-фактор журналов, в которых были опубликованы статьи'}
                            visible={false}/>
                    <Column dataField={'pubQuantityMonography'} caption={'Количество монографий'} visible={false}/>
                    <Column dataField={'pubScopus'} caption={'Количество публикаций автора из базы данных scopus'}
                            visible={false}/>
                    <Column dataField={'pubWos'} caption={'Количество публикаций автора из базы данных web of science'}
                            visible={false}/>
                    <Column dataField={'citElibrary'} caption={'Число цитирований из публикаций на elibrary.ru'}
                            visible={false}/>
                    <Column dataField={'citRinc'} caption={'Число цитирований из публикаций, входящих в ринц'}
                            visible={false}/>
                    <Column dataField={'citRincCore'} caption={'Число цитирований из публикаций, входящих в ядро ринц'}
                            visible={false}/>
                    <Column dataField={'citPubCitAuthor'} caption={'Число публикаций, процитировавших работы автора'}
                            visible={false}/>
                    <Column dataField={'citRefMostCit'} caption={'Число ссылок на самую цитируемую публикацию'}
                            visible={false}/>
                    <Column dataField={'citPubCitEvenOnce'}
                            caption={'Число публикаций автора, процитированных хотя бы один раз'} visible={false}/>
                    <Column dataField={'citMiddleQuantityForOnePub'}
                            caption={'Среднее число цитирований в расчете на одну публикацию'} visible={false}/>
                    <Column dataField={'citSelfCit'} caption={'Число самоцитирований'} visible={false}/>
                    <Column dataField={'citQuantityCitByCoAuthor'} caption={'Число цитирований соавторами'}
                            visible={false}/>
                    <Column dataField={'citQuantityCoAuthor'} caption={'Число соавторов'} visible={false}/>
                    <Column dataField={'citForeignJournals'} caption={'Число цитирований из зарубежных журналов'}
                            visible={false}/>
                    <Column dataField={'citRusJournals'} caption={'Число цитирований из российских журналов'}
                            visible={false}/>
                    <Column dataField={'citRusVakJournals'}
                            caption={'Число цитирований из российских журналов из перечня вак'} visible={false}/>
                    <Column dataField={'cirRusTranslateJournals'}
                            caption={'Число цитирований из российских переводных журналов'} visible={false}/>
                    <Column dataField={'citQuantityFromJournalsNotNullImpact'}
                            caption={'Число цитирований из журналов с ненулевым импакт-фактором (в процентах)'}
                            visible={false}/>
                    <Column dataField={'citMiddleImpact'}
                            caption={'Средневзвешенный импакт-фактор журналов, в которых были процитированы статьи'}
                            visible={false}/>
                    <Column dataField={'citQuantityCitPubInLastFiveYears'}
                            caption={'Число цитирований работ автора, опубликованных за последние пять лет'}
                            visible={false}/>
                    <Column dataField={'citQuantityAllPubLastFiveYears'}
                            caption={'Число цитирований публикаций автора из всех публикаций за последние пять лет'}
                            visible={false}/>
                    <Column dataField={'citScopus'} caption={'Количество цитирований авторами из базы данных scopus'}
                            visible={false}/>
                    <Column dataField={'citWos'}
                            caption={'Количество цитирований авторами из базы данных web of science'} visible={false}/>
                    <Column dataField={'hirshElibrary'} caption={'Индекс хирша по всем публикациям на elibrary.ru'}
                            visible={false}/>
                    <Column dataField={'hirshRinc'} caption={'Индекс хирша по публикациям в ринц'} visible={false}/>
                    <Column dataField={'hirshRincCore'} caption={'Индекс хирша по ядру ринц'} visible={false}/>
                    <Column dataField={'hirshWithoutSelfCit'} caption={'Индекс хирша без учета самоцитирований'}
                            visible={false}/>
                    <Column dataField={'hirshOnlyFromPubInJournals'}
                            caption={'Индекс хирша с учетом только статей в журналах'} visible={false}/>
                    <Column dataField={'hirshScopus'} caption={'Индекс хирша автора из базы данных scopus'}
                            visible={false}/>
                    <Column dataField={'hirshWos'} caption={'Индекс хирша автора из базы данных web of science'}
                            visible={false}/>
                </DataGrid>
            </div>
        )
    }
}
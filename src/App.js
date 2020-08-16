import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, {Component} from 'react';

import './App.css'
import {Route} from 'react-router-dom'
import Navigation from "./components/Navigation";
import Institute from "./components/Thesaurus/Institute/Institute";
import Cathedra from "./components/Thesaurus/Cathedra/Cathedra";
import Degree from "./components/Thesaurus/Degree/Degree";
import Employees from "./components/Thesaurus/Employees/Employees";
import Post from "./components/Thesaurus/Post/Post";
import Title from "./components/Thesaurus/Title/Title";
import IndexCathedra from "./components/Index/IndexCathedra/IndexCathedra";
import IndexEmployees from "./components/Index/IndexEmployees/IndexEmployees";
import IndexInstitute from "./components/Index/IndexInstitute/IndexInstitute";
import Existing from "./components/Add/Existing/Existing";
import New from "./components/Add/New/New";

export default class App extends Component {
    render() {
        return (
            <div>

                <Navigation/>

                {/*Роутинг добавления показателей*/}
                <Route path="/add/new" component={New}/>
                <Route path="/add/existing" component={Existing}/>

                {/*Роутинг просмотра индексов публикационной активности*/}
                <Route path="/index/indexcathedra" component={IndexCathedra}/>
                <Route path="/index/indexemployees" component={IndexEmployees}/>
                <Route path="/index/indexinstitute" component={IndexInstitute}/>

                {/*Роутинг справочников*/}
                <Route path="/thesaurus/cathedra" component={Cathedra}/>
                <Route path="/thesaurus/institute" component={Institute}/>
                <Route path="/thesaurus/degree" component={Degree}/>
                <Route path="/thesaurus/employees" component={Employees}/>
                <Route path="/thesaurus/post" component={Post}/>
                <Route path="/thesaurus/title" component={Title}/>

            </div>
        );
    }
}

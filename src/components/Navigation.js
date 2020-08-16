import {Collapse, Dropdown, Nav, Navbar} from "bootstrap-4-react";
import React,{Component} from "react";
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component{
    render() {
        return (
            <Navbar expand="lg" light bg="light">
                <Navbar.Brand href="#">
                    Система учета публикационной активности ППС ИРНИТУ
                </Navbar.Brand>
                <Navbar.Toggler target="#navbarSupportedContent" />
                <Collapse navbar id="navbarSupportedContent">
                    <Navbar.Nav mr="auto">

                        <Nav.Item dropdown>
                            <Nav.Link dropdownToggle>Просмотр индексов</Nav.Link>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <NavLink to="/index/indexemployees">Индвидуальные</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/index/indexinstitute">По институтам</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/index/indexcathedra">По кафедрам</NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Nav.Item>

                        <Nav.Item dropdown>
                            <Nav.Link dropdownToggle>Добавить показатели</Nav.Link>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <NavLink to="/add/new">Новые</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/add/existing">Существующий</NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Nav.Item>

                        <Nav.Item dropdown>
                            <Nav.Link dropdownToggle>Справочники</Nav.Link>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <NavLink to="/thesaurus/institute">Институты</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/thesaurus/cathedra">Кафедры</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/thesaurus/degree">Ученые степени</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/thesaurus/title">Ученые звания</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/thesaurus/post">Должности</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/thesaurus/employees">Сотрудники</NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Nav.Item>
                    </Navbar.Nav>
                </Collapse>
            </Navbar>
        )
    }
}

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Menu.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="sticky-wrapper">
          <Navbar role="navigation" className="navbar navbar-default">
            <Navbar.Header>
              <Navbar.Brand>
                <a className="scroll-to" href="#home"><span>{ '<J />' }</span></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse id="navigation" className="navbar-right">
              <Nav>
                <NavItem eventKey={1} href="#intro" className="active">{ '<Home />' }</NavItem>
                <NavItem eventKey={2} href="#about">{ '<About />' }</NavItem>
                <NavItem eventKey={3} href="#skills">{ '<Life-Cycle />' }</NavItem>
                <NavItem eventKey={4} href="#portfolio">{ '<Hire />' }</NavItem>
                {/*<LinkContainer to="/blogs">*/}
                <NavItem onClick={() => { alert('Soon'); }}>{ '<Blogs />' }</NavItem>
                {/*</LinkContainer>*/}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}
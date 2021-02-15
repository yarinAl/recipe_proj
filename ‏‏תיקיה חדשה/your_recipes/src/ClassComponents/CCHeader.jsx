import React, { Component } from 'react';
import FCNavbar from '../FunctionalComponents/FCNavbar';
import FCSidebar from '../FunctionalComponents/FCSidebar';

export default class CCHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isLogged: false,
        };
    }

    setIsOpen = (check) => {
        this.setState({
            isOpen: check,
        })
    }

    setIsLoggedOpen = (check) => {
        this.setState({
            isLogged: check,
        })
    }

    render () {

        const toggle = () => {
            this.setIsOpen(!this.state.isOpen);
        }

        const loggedToggle = () => {
            let res = this.setIsLoggedOpen(!this.state.isLogged);
            return res;
        }
                
        if (window.location.pathname === "/Login" || window.location.pathname === "/Register") {
            return false;
        }

        return (
            <div>
                <FCNavbar toggle={toggle} loggedToggle={loggedToggle}/>
                <FCSidebar isOpen={this.state.isOpen} toggle={toggle} isLogged={this.state.isLogged} loggedToggle={loggedToggle}/>
            </div>
        );
    }
}
import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import { Button } from '../Buttons';
import companyLogo from '../../assets/IPP-LOGO1.png';
import './Navbar.css'


class Navbar extends Component {
    state = { clicked: false }

    handelClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className='NavbarItems'>
                {/* <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1> */}
                <img className='navbar-logo' src={companyLogo}/>
                <div className='menu-icon' onClick={this.handelClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Account</Button>
            </nav>
        )
    }
}

export default Navbar
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//IMG
import logoUrl from '../../img/logo.png';
import allMenu from '../../img/allMenu.png';

class Header_admin extends Component{

    constructor(props){
        super(props);
        this.state = {
            isScrolled: false,
            menuAll: false,
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 1){
            this.setState({isScrolled : true});
        }else{
            this.setState({isScrolled : false});
        }
    }

    menuToggle = (e) => {
        e.preventDefault();
        this.setState({menuAll : !this.state.menuAll});
    }

    render(){
        return(
            <div>
                <header className={`header ${this.state.isScrolled ? 'scrolled' : ''}`} id="header">
                    <div className="wrap">
                        <h1 className="logo"><Link to={'/'}><img src={logoUrl} alt="로고" /></Link></h1>

                        <div className="navBar">
                            <div className="menuBtn">
                                <button type='button' onClick={this.menuToggle}><img src={allMenu} alt="Menu" /></button>
                            </div>
                            <nav className={`${this.state.menuAll ? 'menu-open' : ''}`}>
                                <ul>
                                    <li onClick={this.menuToggle}>
                                        <Link to={'/About'}>ABOUT</Link>
                                    </li>
                                    <li onClick={this.menuToggle}>
                                        <Link to={'/SoftwareList'}>PROJECT</Link>
                                    </li>
                                </ul>
                                <button className="close" onClick={this.menuToggle}>닫기</button>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header_admin;
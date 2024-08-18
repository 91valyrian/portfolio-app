import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

//IMG

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
            <header className={`header ${this.state.isScrolled ? 'scrolled' : ''}`} id="header">
                <div className="wrap">
                    <h1 className="logo"><Link to={'/'}>Leezzakka;</Link></h1>

                    <div className="navBar">
                        <div className="menuBtn">
                            <button type='button' onClick={this.menuToggle} className={`${this.state.menuAll ? 'open' : 'close'}`}></button>
                        </div>
                        <aside className={`${this.state.menuAll ? 'menu-open' : ''}`}>
                            <h2 className="blind">메뉴 열림</h2>
                            <div className="area area-1">
                                <p>How To Contact:</p>
                                <p>
                                    +82 010-9928-6110<br />
                                    <a href="mailto:91.valyrian@gmail.com">91.valyrian@gmail.com</a>
                                </p>
                            </div>
                            <div className="area area-2">
                                <ul>
                                    <li onClick={this.menuToggle}>
                                        <Link to={'/'}>
                                            HOME
                                            <span>HOME</span>
                                        </Link>
                                    </li>
                                    <li onClick={this.menuToggle}>
                                        <Link to={'/'}>
                                            ABOUT
                                            <span>ABOUT</span>
                                        </Link>
                                    </li>
                                    <li onClick={this.menuToggle}>
                                        <Link to={'/'}>
                                            PROJECT
                                            <span>PROJECT</span>
                                        </Link>
                                    </li>
                                    <li onClick={this.menuToggle}>
                                        <Link to={'/'}>
                                            CONTACT
                                            <span>CONTACT</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="area area-3">
                                <Marquee className="marqueeLayout" speed={50}>
                                    <span>FLEXIBILITY</span> <span>PASSION</span> <span>ACTIVELY</span> <span>FLEXIBILITY</span> <span>PASSION</span> <span>ACTIVELY</span>
                                </Marquee>
                            </div>
                            <div className="area area-4"></div>
                        </aside>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header_admin;
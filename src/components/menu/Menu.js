import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './Menu.css'
import logo from '../../images/logo.jpg'

class Menu extends Component {
    componentDidMount() {
        this.rootMenu = ReactDOM.findDOMNode(this); // component root
        this.logoImage = this.rootMenu.querySelector(".logo"); // component div logo
    }
    render() {
        return (
            
            <div className="menu">
                    <nav className ="navbar navbar-expand-sm">
                        {/* button toggle menu */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".menuNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-bars bar"></span>
                        </button>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".cartIcon" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-shopping-bag bar"></span>
                        </button>

                        {/* navbar link */}
                            <div className="collapse navbar-collapse menuNav leftMenu col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <ul className="nav navbar-nav">
                                    <li className="nav-link">
                                        <a href="# ">HOME</a>
                                    </li>
                                    <li className="nav-link">
                                        <a href="# ">COLLECTIONS</a>
                                    </li>
                                    <li className="nav-link">
                                        <a href="# ">MEET THE MAKER</a>
                                    </li>
                                    <li className="nav-link">
                                        <a href="# ">BLOG</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 talign collapse navbar-collapse">
                                <img src= { logo } alt="logo" className="logo"
                                />
                            </div>
                            <div className="collapse navbar-collapse menuNav col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
                                <ul className="nav navbar-nav rightMenu">
                                    <li className="nav-link">
                                        <a href="# ">SEARCH</a>
                                    </li>
                                    <li className="nav-link cartIcon">
                                        <a href="# ">CART (0)</a>
                                    </li>
                                </ul>
                            </div>
                        
                    </nav>
            </div>

            
        )
    };
}

export default Menu;

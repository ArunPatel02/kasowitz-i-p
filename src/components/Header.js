import React from 'react'
import logo from "./asserts/logo.svg";
import"./css/Header.css";


function Header() {
    return (
        <div className="nav1 header">
            <div className="nav1 inner_header">
                <div className="left_head">
                    <div className="logo">
                        <img src={logo} alt="Kasowitz Benson torres" className="logo_svg" />
                    </div>
                </div>
                <div className="nav1 right_head">
                    <div className="navigation">
                        <ul className="menu_list">
                            <li className="items">
                                <a href="/clients" className="item_Link triangle">Clients</a>
                            </li>
                            <li className="items">
                                <a href="/people" className="item_Link triangle">People</a>
                            </li>
                            <li className="items">
                                <a href="/capabilities" className="item_Link triangle">Capabilities</a>
                            </li>
                            <li className="items">
                                <a href="/evidence" className="item_Link triangle">Evidence</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav header_navigation_btn">
                    <div className="search_btn">
                    <i class="fas fa-search"></i>
                    </div>
                    <div className="menubtn">
                    <i class="fas fa-bars"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

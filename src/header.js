import React from "react";
import logo from './logo.svg';

export default class Header extends React.Component {
    render (){
        return (
            <div className="header">
                <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
                    
                </div>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </nav>
                <br />
                <h1>
                        Header Component
                    </h1>
            </div>
        )
    }
}
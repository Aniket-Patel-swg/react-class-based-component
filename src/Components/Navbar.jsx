import React, {Component} from "react";
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return(
            <>
                {/* this is navbar */}
                <nav className="navbar">

<div className="left">

    <h1>Navbar</h1>

</div>

<div className="right">

    {/* <input type="checkbox" id="check"> */}

    <label for="check" className="checkBtn">

        <i className="fa fa-bars"></i>

    </label>

    <ul className="list">

        <li><a href="#">Home</a></li>

        <li><a href="#">Gallery</a></li>

        <li><a href="#">Services</a></li>

        <li><a href="#">About Us</a></li>

        <li><a href="#">Contact Us</a></li>

    </ul>

</div>

</nav>
            </>
        )
    }
}
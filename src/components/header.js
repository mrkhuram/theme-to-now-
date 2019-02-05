import React, { Component } from 'react';
import logo from '../images/logo.jpg'
import '../style.css';
import { Link } from 'react-router-dom'

class Header extends Component {




	render() {

		return (
			<div className="App">
				<div id="header">
					<div id="logo">
						<Link to="/"><img src={logo} alt="" /></Link>
					</div>
					<ul>
						<li className="selected"><Link to='./Home'><span>home</span></Link></li>
						<li><Link to='./About'><span>about us</span></Link></li>
						<li><Link to="/services"><span>services</span></Link></li>
						<li><Link to="/product"><span>products</span></Link></li>
						<li><Link to="/contact-us"><span>contact us</span></Link></li>
					</ul>
				</div>
			</div>

		);

	}



}

export default Header;
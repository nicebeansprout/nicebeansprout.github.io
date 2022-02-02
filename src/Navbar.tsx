import React from 'react';
import './App.scss';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="page-container">
					<a href="/#/commissions">Commissions Info</a>
					<a href="/#/works">Portfolio</a>
					<a href="/#/about">About?</a>
				</div>
			</div>
		);
	}
}

export default Navbar;

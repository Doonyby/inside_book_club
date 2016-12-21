import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";


class Navigation extends React.Component {
	render () {
		return (
			<div>
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link to="/joinclub" className="navbar-brand">Menu</Link>
			    </div>
			    <div className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
			      	<li><Link to='/myclub'>Profile</Link></li>
			      </ul>
			    </div>
			  </div>
			</nav>
			</div>
		);
	}
}

export default connect()(Navigation);
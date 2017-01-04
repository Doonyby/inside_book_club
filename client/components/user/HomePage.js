import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";


class Home extends React.Component {
	render () {
		console.log('home component: ', this.props.club);
		return (
			<div className="container">
				<Navigation className="navigation" />
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ club: state });

export default connect(mapStateToProps)(Home);
import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";


class Home extends React.Component {
	render () {
		return (
			<div>
				<Navigation className="navigation" club={this.props.club} />
				<div className="homeDiv">
					{this.props.children}				
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({ club: state });

export default connect(mapStateToProps)(Home);
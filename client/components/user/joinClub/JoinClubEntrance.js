import React from "react";
import JoinClub from "./JoinClub";
import SelectClubContainer from "./SelectClubContainer"
import { connect } from "react-redux";
import { getJoinClubDataAction } from "../../../actions/user-actions";

class JoinClubEntrance extends React.Component {
	render () {
		let selectClubOrJoinClub = this.props.club.homeReducer.joinClub ? <JoinClub club={this.props.club}/> : <SelectClubContainer />
		return (
		     <div className="container">
		         {selectClubOrJoinClub}
		     </div>
	    );		
	}
}

const mapStateToProps = (state) => ({ club: state });
const mapDispatchToProps = (dispatch) => { 
	return { 
		getJoinClubData: (clubName) => { dispatch(getJoinClubDataAction(clubName)); }
	}
}

export default connect(mapStateToProps)(JoinClubEntrance)



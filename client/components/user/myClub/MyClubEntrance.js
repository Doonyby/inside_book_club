import React from "react";
import MyClub from "./MyClub";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { showNewClubModal, getMyClubData } from "../../../actions/user-actions";
import NewClubModal from "./NewClubModal";



class MyClubEntrance extends React.Component {
	render () {
		let queryOrClub = this.props.club.homeReducer.myClub ? <MyClub getMyClubData={(clubName) => {this.props.getMyClubData(clubName)}} club={this.props.club} /> : <Query onClick={() => {this.props.showNewClubModal()}}/>
		return (
		     <div>
		         { queryOrClub }
		         <NewClubModal />
		     </div>
	    );		
	}
}

const Query = (props) => {
  	let spaceStyle = {
  		marginTop: 100
  	}
    return (
		<div style={spaceStyle}>
			<h3 className="whiteText">You do not have a club set up yet. Click on the button below to create your club.</h3>
			<Button onClick={props.onClick}>Create club</Button>
			<h4 className="whiteText">Or, you can use the menu to go to your "joined" club</h4>
		</div>	
    );
};

const mapStateToProps = (state) => ({ club: state });
const mapDispatchToProps = (dispatch) => { 
	return { 
		showNewClubModal: () => { dispatch(showNewClubModal()); },
		getMyClubData: (clubName) => { dispatch(getMyClubData(clubName)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyClubEntrance)



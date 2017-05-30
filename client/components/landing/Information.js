import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { hideInfoModalAction } from "../../actions/landing-actions";

const Information = ({ club, hideInfoModal }) => {
	return (
		<Modal className="informationDiv" show={club.homeReducer.showInfoModal} onHide={() => { return hideInfoModal() }}>
			<Modal.Header closeButton>
            	<Modal.Title>Information</Modal.Title>
          	</Modal.Header>
          	<Modal.Body>
				<p className="textLeft"><strong>Inside Book Club</strong> is an app designed for you and a few friends to enjoy the
					pleasures of sharing in books together.  The idea is not to get a huge following like other 
					reading web sites, but it is to provide a smaller atmosphere like you would enjoy if you
					were hosting a book club in your own home.  The main differences are that you can participate 
					with other book club friends from all over the world instead of just your local area, and tea/bisquits
					are not provided.</p>
				<p className="textLeft">Inside Book Club allows you access to only two clubs at a time per account.  One is
					a club you can create, and one is a club you can join.  We believe that any more than that can get a 
					little hard to keep track of and keep up with.  Falling behind in club reading meetup dates could 
					potentially cause other club members some unwanted feelings of abandonment due to the exclusive nature 
					of the app...which is simply bad etiquette.  Please do not be the cause of their suffering.  If you are the
					"5 books per week" type, maybe signing up for multiple accounts would be the route for you.</p>
				<p className="textLeft">Please join us!  Get your account set up and tell your friends to join in as well.  
					More instructions are on the site when you sign up if needed.  Then, cozy up to the wonderful world of 
					literature, and get started!  Cheers!</p>  
			</Modal.Body>
			<Modal.Footer>
            	<Button onClick={() => { return hideInfoModal() }}>Close</Button>
            </Modal.Footer>
		</Modal>
	);	
}

const mapStateToProps = (state) => {
	return {
		club: state
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		hideInfoModal: () => { dispatch(hideInfoModalAction()) }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Information);


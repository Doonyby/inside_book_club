import React from "react";
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";
import { connect } from "react-redux";
import { hideNewClubModal } from "../../../actions/user-actions";
import { submitNewMyClub } from "../../../actions/landing-actions";

const NewClubModal = ({ club, hideNewClubModal, submitNewMyClub }) => {
	let modalDivStyle = {
		textAlign: "left"
	}
	let validate = null;
	let isError = "";
	let errorStyle = null;
	let errorMessage = "Try to make it original";
	if (club.homeReducer.myClubError) {
		validate = "error"
		isError = "Error";
		errorMessage = club.homeReducer.myClubError;
		errorStyle = "danger";
	}
	return (
		<Modal show={club.myClubReducer.showNewClubModal} onHide={() => { return hideNewClubModal() }}>
          <Modal.Header closeButton>
            <Modal.Title>Create your book club!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalDivStyle}>
            <form onSubmit={(e) => {
				e.preventDefault();
				let clubData = {
					clubName: e.target.clubName.value,
					organizer: club.homeReducer.username,
					organizerId: club.homeReducer.id,
					memberCap: e.target.memberCap.value,
					currentBook: e.target.currentBook.value,
					meetupDate: e.target.meetupDate.value
				}
				submitNewMyClub(clubData);
			}} >
	    	    <FormGroup style={modalDivStyle} controlId="clubName" validationState={validate}>
			      <ControlLabel>Club Name</ControlLabel>
			      <FormControl type="text" name="clubName" placeholder="club name"/>
			      <HelpBlock bsStyle={errorStyle}>{errorMessage}</HelpBlock>
			    </FormGroup>
			    <FormGroup style={modalDivStyle} controlId="memberCap">
			      <ControlLabel>Club Size</ControlLabel>
			      <FormControl type="number" name="memberCap" placeholder="1"/>
			      <HelpBlock>This is the maximum members that you will allow in your club.  
			      Remember that group conversations are often easiest with smaller groups. (i.e. less than 10)</HelpBlock>
			    </FormGroup>
			    <FormGroup style={modalDivStyle} controlId="currentBook">
			      <ControlLabel>Current Club Book</ControlLabel>
			      <FormControl type="text" name="currentBook" placeholder="current club book"/>
			      <HelpBlock>If you haven not decided on a book yet, leave this blank for now.</HelpBlock>
			    </FormGroup>
			    <FormGroup style={modalDivStyle} controlId="meetupDate">
			      <ControlLabel>Club Meetup Date/Time</ControlLabel>
			      <FormControl type="datetime-local" name="meetupDate" />
			      <HelpBlock>Also okay to leave this blank until you have a decided book and appropriate time length for reading.</HelpBlock>
			    </FormGroup>
			    <h5 className="text-danger">{isError}</h5>
			    <Button type="submit">Submit</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { return hideNewClubModal() }}>Close</Button>
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
		hideNewClubModal: () => { dispatch(hideNewClubModal()) },
		submitNewMyClub: (newClubData) => { dispatch(submitNewMyClub(newClubData)) }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(NewClubModal);


import React from "react";
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

const EditClubModal = ({club, hideEditClubModal}) => {
	console.log("editClub", club);
	let modalDivStyle = {
		textAlign: "left"
	}
	let validate = null;
	let isError = "";
	let errorStyle = null;
	let errorMessage = "Try to make it original";

	return (
		<Modal show={club.showEditClubModal} onHide={() => { return hideEditClubModal() }}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your book club</Modal.Title>
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
			      <HelpBlock>Also okay to leave this blank until you have a decided book and appropriate time length to read it in.</HelpBlock>
			    </FormGroup>
			    <h5 className="text-danger">{isError}</h5>
			    <Button type="submit">Submit</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { return hideEditClubModal() }}>Close</Button>
          </Modal.Footer>
        </Modal>
	);
}

export default EditClubModal;
import React from "react";
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

const EditClubModal = ({club, hideEditClubModal, submitEditClubModal, deleteClubModal}) => {
	let modalDivStyle = {
		textAlign: "left"
	}
	let deleteStyle = {
		float: "right",
		marginTop: 10
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
					clubName: club.clubName,
					currentBook: e.target.currentBook.value,
					meetupDate: e.target.meetupDate.value
				}
				submitEditClubModal(clubData);
			}} >
				<h5>Club Name: {club.clubName}</h5>
				<h5>Club Size: {club.memberCap}</h5>
				<p>If you wish to change the club name or size, then you must delete your club and start new.</p>
			    <FormGroup style={modalDivStyle} controlId="currentBook">
			      <ControlLabel>Current Club Book</ControlLabel>
			      <FormControl type="text" name="currentBook" placeholder="current club book"/>
			    </FormGroup>
			    <FormGroup style={modalDivStyle} controlId="meetupDate">
			      <ControlLabel>Club Meetup Date/Time</ControlLabel>
			      <FormControl type="datetime-local" name="meetupDate" />
			      <HelpBlock>Okay to leave this blank until you have a decided book and appropriate time length for reading.</HelpBlock>
			    </FormGroup>
			    <h5 className="text-danger">{isError}</h5>
			    <Button bsStyle="primary" type="submit">Submit</Button>
			    <a className="text-danger" style={deleteStyle} onClick={() => { 
			    	if (confirm("Are you sure you want to delete this Club? Any club info and members you have will be lost.") == true) {
            		deleteClubModal({clubName: club.clubName}) }}}>Delete club</a>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { return hideEditClubModal() }}>Close</Button>
          </Modal.Footer>
        </Modal>
	);
}

export default EditClubModal;
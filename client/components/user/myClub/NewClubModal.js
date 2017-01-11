import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { hideNewClubModal } from "../../../actions/user-actions";

const NewClubModal = ({ club, hideNewClubModal }) => {
	console.log('modal', club);
	return (
		<Modal  show={club.showNewClubModal} onHide={() => { return hideNewClubModal() }}>
          <Modal.Header closeButton>
            <Modal.Title>Create your book club!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => {
				e.preventDefault();
				let clubData = {
					clubName: e.target.clubName.value,
					password: e.target.password.value
				}
				submitNewMyClub(clubData);
			}} >
	    	    <FormGroup controlId="clubName">
			      <ControlLabel>Textarea</ControlLabel>
			      <FormControl componentClass="textarea" placeholder="textarea" />
			    </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
          	<Button>Submit</Button>
            <Button onClick={() => { return hideNewClubModal() }}>Close</Button>
          </Modal.Footer>
        </Modal>
	);
}

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		hideNewClubModal: () => { dispatch(hideNewClubModal()) },
		submitNewMyClub: () => { dispatch(submitNewMyClub(clubData)) }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(NewClubModal);


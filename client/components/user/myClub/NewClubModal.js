import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

const NewClubModal = () => {
	return (
		<Modal show={this.club.showNewClubModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create your book club!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This is my new club modal</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
	);
}

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}
export default connect(mapStateToProps)(NewClubModal);

ReactDOM.render(<NewClubModal />, mountNode);
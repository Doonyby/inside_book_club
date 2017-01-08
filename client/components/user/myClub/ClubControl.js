import React from "react";
import { Modal, Button } from "react-bootstrap";

const Control = ({ club, showNewClubModal, hideNewClubModal, submitNewMyClub }) => {
	console.log('club: ', club);
	return (
		<div>
			<h4><u>Control</u></h4>
			<p>You do not have a club set up.  Click the button below to set up your club.</p>
			<Button onClick={() => { return showNewClubModal() }}>Create Club</Button>
		</div>
	)
}

export default Control

// 		<Modal show={this.club.showNewClubModal} onHide={this.close}>
//           <Modal.Header closeButton>
//             <Modal.Title>Create your book club!</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>This is my new club modal</p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={this.close}>Close</Button>
//           </Modal.Footer>
//         </Modal>

// var Home = React.createClass({
//   state: {showPopup: false}  
//   render: function() {
//     var popupOrModal = this.state.showPopup ? <Popup> : <Modal>
//     return (
//      <div>
//        ...
//        { popupOrModal }
//      </div>
//     )
//   }
// })

// var Popup = React.createClass({
//   render: function() {
    
//   }
// })


// var Modal = React.createClass({
//   render: function() {
//     return (<div>Modal</div>)
//   }
// })
// <App> 
//   <Header /> 
//   <Home /> 
//   <Footer />
// </App>
import React from "react";
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

const SignupPage = ({ user, submitSignup, hideSignupModal }) => {
	let error = "";
	if (user.error) {
		error = user.error;
	}
	return (
		<Modal className="signupDiv" show={user.showSignupModal} onHide={() => { return hideSignupModal() }}>
			<Modal.Header closeButton>
            	<Modal.Title>Signup</Modal.Title>
          	</Modal.Header>
          	<Modal.Body>
				<form onSubmit={ (e) => {
					e.preventDefault();
					let userData = {
						name: e.target.name.value,
						email: e.target.email.value,
						username: e.target.username.value,
						password: e.target.password.value,
						passwordConfirm: e.target.passwordConfirm.value
					}
					submitSignup(userData);
				}} >
					<h4>Join our community!</h4>
					<h4 className="errorText">{ error }</h4>
					<div className="inputPadding">
						<label>Name</label>
						<input 
							type="text" 
							name="name" />
					</div>
					<div className="inputPadding">
						<label>Email</label>
						<input 
							type="text" 
							name="email" />
					</div>
					<div className="inputPadding">
						<label>Username</label>
						<input 
							type="text" 
							name="username" />
					</div>	
					<div className="inputPadding">
						<label>Password</label>
						<input 
							type="password" 
							name="password" />
					</div>
					<div className="inputPadding">
						<label>Confirm Password</label>
						<input 
							type="password" 
							name="passwordConfirm" />
					</div>																							
					<div className="inputPadding">
						<button className="btn btn-primary btn-large">Sign up</button>
					</div>
				</form>
			</Modal.Body>
            <Modal.Footer>
            	<Button onClick={() => { return hideSignupModal() }}>Close</Button>
            </Modal.Footer>
		</Modal>
	);	
}

export default SignupPage;






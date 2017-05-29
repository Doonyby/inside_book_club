import React from "react";
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

const Login = ({ user, login, hideLoginModal }) => {
	let error = "";
	if (user.error) {
		error = "Login failed. If you don't have an account with us, please press the 'signup' button. Otherwise, try again.";
	}
	return (
		<Modal className="loginDiv" show={user.showLoginModal} onHide={() => { return hideLoginModal() }}>
			<Modal.Header closeButton>
            	<Modal.Title>Login</Modal.Title>
          	</Modal.Header>
          	<Modal.Body>
				<form onSubmit={(e) => {
					e.preventDefault();
					let userData = {
						username: e.target.username.value,
						password: e.target.password.value
					}
					login(userData);
				}} >
					<h4>Enter Login Info!</h4>
					<h4 className="errorText">{ error }</h4>
					<div className="inputPadding">
						<label>Username</label>
						<input
							type="text" 
							name="username" />
					</div>
					<div className="inputPadding">
						<label>Password</label>
						<input 
							type="text" 
							name="password" />
					</div>																						
					<div className="inputPadding">
						<button className="btn btn-primary btn-large">Login</button>
					</div>
				</form>
			</Modal.Body>
            <Modal.Footer>
            	<Button onClick={() => { return hideLoginModal() }}>Close</Button>
            </Modal.Footer>
		</Modal>					
	)
}



export default Login



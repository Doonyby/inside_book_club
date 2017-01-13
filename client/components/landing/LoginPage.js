import React from "react";

const Login = ({ user, login }) => {
	let error = "";
	if (user.error) {
		error = "Login failed. If you don't have an account with us, please press the 'signup' button. Otherwise, try again.";
	}
	return (
		<div className="loginDiv">
			<form onSubmit={(e) => {
				e.preventDefault();
				let userData = {
					username: e.target.username.value,
					password: e.target.password.value
				}
				login(userData);
			}} >
				<h1>Enter Login Info!</h1>
				<h4 className="text-danger">{ error }</h4>
				<div>
					<label>Username</label>
					<input
						type="text" 
						name="username" />
				</div>
				<div>
					<label>Password</label>
					<input 
						type="text" 
						name="password" />
				</div>																							
				<div>
					<button className="btn btn-primary btn-large">Login</button>
				</div>
			</form>
		</div>					
	)
}



export default Login



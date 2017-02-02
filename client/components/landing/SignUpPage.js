import React from "react";

const Signup = ({ user, submitSignup }) => {
	let error = "";
	if (user.error) {
		error = user.error;
	}
	return (
		<div className="signupDiv">
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
				<h1>Join our community!</h1>
				<h4 className="text-danger">{ error }</h4>
				<div>
					<label>Name</label>
					<input 
						type="text" 
						name="name" />
				</div>
				<div>
					<label>Email</label>
					<input 
						type="text" 
						name="email" />
				</div>
				<div>
					<label>Username</label>
					<input 
						type="text" 
						name="username" />
				</div>	
				<div>
					<label>Password</label>
					<input 
						type="password" 
						name="password" />
				</div>
				<div>
					<label>Confirm Password</label>
					<input 
						type="password" 
						name="passwordConfirm" />
				</div>																							
				<div>
					<button className="btn btn-primary btn-large">Sign up</button>
				</div>
			</form>
		</div>
	);	
}

export default Signup;






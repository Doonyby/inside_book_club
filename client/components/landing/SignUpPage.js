import React from "react";

const SignupPage = ({ user, submitSignup }) => {
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
				<h1 className="whiteText">Join our community!</h1>
				<h4 className="text-danger">{ error }</h4>
				<div className="inputPadding">
					<label className="whiteText">Name</label>
					<input 
						type="text" 
						name="name" />
				</div>
				<div className="inputPadding">
					<label className="whiteText">Email</label>
					<input 
						type="text" 
						name="email" />
				</div>
				<div className="inputPadding">
					<label className="whiteText">Username</label>
					<input 
						type="text" 
						name="username" />
				</div>	
				<div className="inputPadding">
					<label className="whiteText">Password</label>
					<input 
						type="password" 
						name="password" />
				</div>
				<div className="inputPadding">
					<label className="whiteText">Confirm Password</label>
					<input 
						type="password" 
						name="passwordConfirm" />
				</div>																							
				<div className="inputPadding">
					<button className="btn btn-primary btn-large">Sign up</button>
				</div>
			</form>
		</div>
	);	
}

export default SignupPage;






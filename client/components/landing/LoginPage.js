import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../actions/landing-actions";

const Login {
	render() {
		if (this.props.error) {
			return <h4>{this.state.error}</h4>;	
		}
		return (
			<div className="loginDiv">
				<form onSubmit={(e) => {
					e.preventDefault;
					let username = e.target.username.value
				}} >
					<h1>Enter Login Info!</h1>
					<div>
						<label>Username</label>
						<input
							value={this.state.username}
							type="text" 
							name="username" />
					</div>
					<div>
						<label>Password</label>
						<input 
							value={this.state.password}
							type="text" 
							name="password" />
					</div>																							
					<div>
						<button className="btn btn-primary btn-large">Login</button>
					</div>
				</form>
			</div>					
		);

	}
}

export default Login



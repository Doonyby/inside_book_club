import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../actions/landing-actions";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	loginRequest(userData) {
		this.props.dispatch(loginRequest(userData));
	}

	onSubmit(e) {
		e.preventDefault();
		this.loginRequest(this.state);
	}

	render() {
		return (
			<div className="loginDiv">
				<form onSubmit={this.onSubmit} >
					<h1>Enter Login Info!</h1>
					<div>
						<label>Username</label>
						<input
							value={this.state.username}
							onChange={this.onChange}  
							type="text" 
							name="username" />
					</div>
					<div>
						<label>Password</label>
						<input 
							value={this.state.password}
							onChange={this.onChange} 
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

export default connect()(Login);



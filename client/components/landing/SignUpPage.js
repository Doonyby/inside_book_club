import React from "react";
import { connect } from "react-redux";
import { signUpRequest } from "../../actions/landing-actions";

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			username: '',
			password: '',
			passwordConfirm: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	signUpRequest(userData) {
		this.props.dispatch(signUpRequest(userData));
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.state.password != this.state.passwordConfirm) {
			console.log("Passwords do not match");
		} else {
			this.signUpRequest(this.state);
		}
	}
	
	render() {
		if (this.props.error) {
			return <h4>{this.state.error}</h4>;	
		}
		return (
			<div className="signupDiv">
				<form onSubmit={this.onSubmit} >
					<h1>Join our community!</h1>
					<div>
						<label>Name</label>
						<input 
							value={this.state.name} 
							onChange={this.onChange} 
							type="text" 
							name="name" />
					</div>
					<div>
						<label>Email</label>
						<input 
							value={this.state.email} 
							onChange={this.onChange} 
							type="text" 
							name="email" />
					</div>
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
							type="password" 
							name="password" />
					</div>
					<div>
						<label>Confirm Password</label>
						<input 
							value={this.state.passwordConfirm} 
							onChange={this.onChange} 
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
}

export default connect()(Signup);






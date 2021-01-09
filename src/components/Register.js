import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			number: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			number: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="User Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
							required
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
							required
						/>
					</div>
					<div className="number">
						<input
							type="text"
							placeholder="Enter your contact number"
							name="number"
							value={this.state.number}
							onChange={this.update}
							required
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
							required
						/>
					</div>

					<div className="password">
						<input 
						type="password" 
						required
						placeholder="Confirm Password" 
						name="password1" />
					</div>

					<input type="submit" value="Submit" />
				</form>

				<Link to="/" style={{ textDecoration: 'none'}}>Login Here</Link>
			</div>
		);
	}
}

export default Register;

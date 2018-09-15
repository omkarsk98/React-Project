import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home';
import TodoList from './TodoList';
import Main from './profiles.js';
import Friends from './Friends.js';
import ReachOut from './ReachOut.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import { Button, Container, Modal } from 'reactstrap';
var style = {
	padding: '20px',
	textAlign: 'center'
}

var button = {
	margin: '0px'
}

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			component: 'Login'
		};
		this.toggle = this.toggle.bind(this);
		this.changeComponent = this.changeComponent.bind(this);
	}
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	changeComponent(param) {
		this.setState({
			component: param
		});
	}
	render() {
		return (
			<Container>
				<Router>
					<div>
						<div className="ui menu">
							<Link to="/"><p className="item">Home</p></Link>
							<Link to="/profile"><p className="item">Profiles</p></Link>
							<Link to="/todolist"><p className="item">TodoList</p></Link>
							<Link to="/friends"><p className="item">Friends</p></Link>
							<div className='right menu'>
								<Link to="/" onClick={this.toggle}><p className="item" textAlign='right'>Login</p></Link>
							</div>
						</div>
						<hr />
						<Route exact path="/" component={Home} />
						<Route path="/profile" component={Main} />
						<Route path="/todolist" component={TodoList} />
						<Route path="/friends" component={Friends} />

					</div>
				</Router>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					{(() => {
						if (this.state.component === 'Login') {
							return (
								<div style={style}>
									<Login />
									<Button color='info' style={button} onClick={() => this.changeComponent('Signup')} >Signup</Button>
								</div>
							);
						}
						else if (this.state.component === 'Signup') {
							return (
								<SignUp />
							);
						}
					})()}
				</Modal>
				<hr />
				<ReachOut />
				{/*
					Add a login button in the corner.. 
					->open a modal..
					->Signup by setting username, email, password and confirm password.
					->Send otp on email and validate it. 
					->Set email expiry time as 5 minutes.
					done with the above steps

					print user name after login
					-->check if credentials are corect
					-->if no.. print incorrect credentials..
					-->if yes.. route to domain/username and print username

				*/}
			</Container>

		);
	}
}
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import Home from './Home';
import TodoList from './TodoList';
import Main from './profiles.js';
import { Button, Container } from 'reactstrap';
import axios from "axios";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.x = this.x.bind(this);
		this.state = {
			user: 'Hey'
		}
	}
	x(e) {
		axios.get("http://192.168.1.102:3001/users").then(result => {
			return result.data;
		}).then(data => {
			this.setState({
				user: data
			})
		}).catch(err => {
			console.log(err);
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
						</div>
						<hr />
						<Route exact path="/" component={Home} />
						<Route path="/profile" component={Main} />
						<Route path="/todolist" component={TodoList} />
					</div>
				</Router>
				<Button color='danger' onClick={this.x}>Danger</Button>
				<br />
				{this.state.user}
			</Container>
		);
	}
}
export default NavBar;
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import Home from './Home';
import TodoList from './TodoList';
import Main from './profiles.js';
import Friends from './Friends.js';
import ReachOut from './ReachOut.js';
import { Container } from 'reactstrap';


class NavBar extends React.Component {
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
							<Link to="/reach-out"><p className="item">Reach Out</p></Link>
						</div>
						<hr />
						<Route exact path="/" component={Home} />
						<Route path="/profile" component={Main} />
						<Route path="/todolist" component={TodoList} />
						<Route path="/friends" component={Friends} />
						<Route path="/reach-out" component={ReachOut} />
					</div>
				</Router>
				
			</Container>
		);
	}
}
export default NavBar;
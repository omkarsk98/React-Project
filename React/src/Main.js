import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/topics">Topics</Link></li>
			</ul>
	
			<hr/>
		
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/topics" component={Topics}/>
		</div>
	</Router>
)


class Home extends React.Component {
	render () {
		return (
			<div>
				<h2>Home</h2>
				<p>Some description about home in this section</p>
				<p>Hello.. <br/>This is just to give an example.<br/>Simply to fill up the lines..</p>
			</div>
		);
	}
}

class About extends React.Component{
	render() {
		return (
			<div>
				<h2>About</h2>
				<p>Some description about "About" in this section</p>
				<p>Example: <br /> This internship is about web development. We got an opportunity to learn so many languages of web development.</p>
			</div>
		);
	}
} 

class Topics extends React.Component {
	render () {
		return (
			<div>
				<h2>Topics</h2>
				<h4>All the topics we have covered in one month</h4>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>php</li>
					<li>MySQL</li>
					<li>Bootstrap</li>
					<li>React Semantic Ui</li>
					<li>React</li>
				</ul>
			</div>
		);
	}
}

export default BasicExample
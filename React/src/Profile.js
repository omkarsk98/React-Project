import React from 'react';

class Profile extends React.Component {
	render () {
		return (
			<div className="ui cards">
				<div className="card">
					<div className="content">
						<img className="left floated mini ui image" src='https://u.o0bc.com/avatars/no-user-image.gif' alt=""/>
						<div className="header">
							John Snow
						</div>
						<div className="meta">
							Mobile no:+919999900000
						</div>
						<div className="description">
							John Snow is a character in The Game of Thrones. He is the King in the North.
						</div>
					</div>
					<div className="extra content" >
						Contact him at xyz@mail.com
					</div>
				</div>
			</div>
		);
	}
}
export default Profile;
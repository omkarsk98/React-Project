import React from 'react';

class Profile2 extends React.Component {
	render() {
		return (
			<div class ="ui cards">
				<div class="card">
					<div class="header">
						<img class="ui centered medium image" src='https://u.o0bc.com/avatars/no-user-image.gif' alt=""/>
					</div>
					<div class="content" >
						<div class="header">
							John Snow
						</div>
						<div class="meta">
							Mobile no: +919999900000
						</div>
						<div class="description">
							John Snow is a character in The Game of Thrones. He is the King in the North.
						</div>
					</div>
					<div class="extra content">
						Meet him in Winterfell!
					</div>
				</div>
			</div>
		);
	}
}
export default Profile2;
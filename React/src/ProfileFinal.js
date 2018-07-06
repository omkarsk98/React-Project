import React from 'react';
import { Grid } from 'semantic-ui-react';
import InstagramEmbed from 'react-instagram-embed';
import { Row, Col } from 'reactstrap';

class ProfileFinal extends React.Component {
	render() {
		return (
			<div class="ui container">
				<div class="ui center aligned black raised segment">
					<b>omkarsk98</b>
				</div>
				<Grid doubling>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<div class="ui center aligned green raised segment">
								<b>
									Omkar Kulkarni
								</b>
								<img class="ui centered circular image" src='https://u.o0bc.com/avatars/no-user-image.gif' alt="" />
							</div>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<div class="ui center aligned red raised segment">
								<b>ABOUT</b>
								<table class="ui table">
									<tbody>
										<tr>
											<td class="center aligned">
												<b>
													CGPA:
												</b>
											</td>
											<td class="center aligned">
												9.0
											</td>
											<td class="center aligned">
												<b>
													Age:
												</b>
											</td>
											<td class="center aligned">
												20
											</td>
										</tr>
										<tr>
											<td class="center aligned">
												<b>
													College:
												</b>
											</td>
											<td class="center aligned">
												Manipal University Jaipur
											</td>
											<td class="center aligned">
												<b>
													Course:
												</b>
											</td>
											<td class="center aligned">
												BTech Computer Science
											</td>
										</tr>
										<tr>
											<td class="center aligned">
												<b>
													Semester
												</b>
											</td>
											<td class="center aligned">
												4th Semester
											</td>
											<td class="center aligned">
												<b>
													Section
												</b>
											</td>
											<td class="center aligned">
												C
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<div class="ui center aligned blue raised segment">
								<b>Other Details</b>
								<div>Detail 1</div>
								<div>Detail 2</div>
								<div>Detail 3</div>
								<div>Detail 4</div>
								<div>Detail 5</div>
								<div>Detail 6</div>
								<div>Detail 7</div>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<br />
				<Row>
					<Col xs='6' sm='4' >
						<InstagramEmbed
							url='https://www.instagram.com/p/Bjg2QLkBqlJ/?taken-by=o.m.kar'
							maxWidth={100}
							hideCaption={true}
							containerTagName='div'
							protocol=''
							injectScript
							onLoading={() => { }}
							onSuccess={() => { }}
							onAfterRender={() => { }}
							onFailure={() => { }}
						/>
					</Col>
					<Col xs='6' sm='4'>
						<InstagramEmbed
							url='https://www.instagram.com/p/BjeHzXkhmaj/?taken-by=o.m.kar'
							maxWidth={100}
							hideCaption={true}
							containerTagName='div'
							protocol=''
							injectScript
							onLoading={() => { }}
							onSuccess={() => { }}
							onAfterRender={() => { }}
							onFailure={() => { }}
						/>
					</Col>
					<Col xs='6' sm='4'>
						<InstagramEmbed
							url='https://www.instagram.com/p/BjAcGvqBvMX/?taken-by=o.m.kar'
							maxWidth={100}
							hideCaption={true}
							containerTagName='div'
							protocol=''
							injectScript
							onLoading={() => { }}
							onSuccess={() => { }}
							onAfterRender={() => { }}
							onFailure={() => { }}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}
export default ProfileFinal;
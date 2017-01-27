import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import io from 'socket.io-client';

class Chatroom extends React.Component {
	render () {
		let presentUsers = [];
		let absentUsers = this.props.club.myClubReducer.members;
		const socket = io('/insideBookClubChat');		
		socket.connect();
		
		const usersDisplay = (chatUsers) => {
			console.log('users in club', chatUsers);
			presentUsers = chatUsers;
		}

		socket.on('connect', () => {
			socket.emit('room', this.props.club.myClubReducer.clubName, this.props.club.homeReducer.username);
		});	
		socket.on('userDisplay', usersDisplay);
		const getAbsentUsers = () => {
			for (var i=0; i<absentUsers.length; i++) {
				for (var j=0; j<presentUsers.length; j++) {
					if (presentUsers[j].username == absentUsers[i].username) {
						absentUsers = absentUsers.splice(i, 1);
					}
				}
			}
			let outUsers = absentUsers.map((currentValue,index) => {
				return (
					<li>currentValue.username</li>
				);
			});
			return outUsers
		}
		const getPresentUsers = presentUsers.map((currentValue, index) => {
			return (
				<li>currentValue.username</li>
			);
		})

 		return (
			<div>
				<h1>Club {this.props.club.myClubReducer.clubName.toUpperCase()} Chatroom</h1>
				<div className="chatroom">
					<div className="chatStats textLeft">
						<p className="text-success"><strong><u>Already here:</u></strong></p>
							<ul className="shelfUl inChatroom">
								<li>{getPresentUsers}</li>
							</ul>
						<p className="text-danger"><strong><u>Currently absent:</u></strong></p>
							<ul className="shelfUl outChatroom">
								<li>{getAbsentUsers}</li>
							</ul>
					</div>
					<div className="chatroomDiv container">
						<form id="commentForm" className="textLeft clubRow2">
						    <FormGroup>
						      <p className="textLeft">Press "enter" to submit comment.</p>
						      <FormControl rows="3" name="chatArea" placeholder="add a comment" componentClass="textarea" onKeyDown={(e) => {
						      		if (e.which==13) {
						      			e.preventDefault();
						      			let currentComment = {
						      				username: this.props.club.homeReducer.username,
						      				comment: e.target.value,
						      			}
						      			if (!/[^\s]/.test(currentComment.comment)) {
						      				e.target.value = '';
						      				return
						      			}
						      			console.log(currentComment.username + ": " + currentComment.comment);
						      			e.target.value = '';
										}}}  />
						    </FormGroup>
					    </form>
					    <hr/>
					    <div className="textLeft">
					    	<p><strong>Name-</strong> Comment blah blah blah</p>
					    </div>
					</div>
				</div>
			</div>
		);		
	}
	componentWillUnmount () {
		location.reload();
	}

}

export default Chatroom;
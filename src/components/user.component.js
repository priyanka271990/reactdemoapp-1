import React, { Component } from 'react';
import {bindActionCreaters} from 'redux';
import {connect} from 'react-redux';

class User extends Component {

	usersDetails = function () {
		return this.props.user.map(function (userObj) {
			return (
				<li key={userObj.id}> {userObj.firstName} {userObj.lastName} </li>
			);
		});
	}

	render () {
		return (
			<div>
				<div>
					<h1>Users List :</h1>
					<br/>
					<h2>users Details :</h2>
				</div>
				<ul>
					{this.usersDetails()}
				</ul>
			</div>
		);
	}
};

function mapStateToProps (state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(User);

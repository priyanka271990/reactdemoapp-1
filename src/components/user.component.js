import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserSelected} from '../actions/index';

class User extends Component {

	usersDetails = function (that) {
		return this.props.user.map(function (userObj) {
			return (
				<li key={userObj.id} onClick={() => that.props.UserSelected(userObj)}> {userObj.firstName} {userObj.lastName} </li>
			);
		});
	}

	render () {
		var that = this;
		return (
			<div>
				<div>
					<h1>Users List :</h1>
					<br/>
					<ul>
						{this.usersDetails(that)}
					</ul>
					<h2>users Details :</h2>
				</div>
			</div>
		);
	}
};

function mapStateToProps (state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({UserSelected: UserSelected}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

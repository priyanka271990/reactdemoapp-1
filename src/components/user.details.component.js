import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {

	render () {
		if (! this.props.activeUser) {
			return (
				<div>No Users is selected now!</div>
			)
		} else {
			return (
				<div>
					<span>Name: {this.props.activeUser.firstName} {this.props.activeUser.lastName}</span>
					<br/>
					<span>Age: {this.props.activeUser.age}</span>
					<br/>
					<span>Date of birth: {this.props.activeUser.dob}</span>
					<br/>
					<span>Description: {this.props.activeUser.description}</span>
				</div>
			)
		}
	}
};

function mapStateToProps (state) {
	return {
		activeUser: state.activeUser
	}
}

export default connect(mapStateToProps)(UserDetails);

export const UserSelected = function (User) {
	console.log('hiiii i am bucy', User.firstName)
	return {
		type: 'USER_SELECTED',
		payload: User
	}
};

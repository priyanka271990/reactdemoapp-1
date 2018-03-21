import {combineReducers} from 'redux';
import UserReducers from './user.reducers';
import MovieReducers from './movie.reducers';
import ActiveUserReducers from './active.user.reducers';

const allReducers = combineReducers({
	user: UserReducers,
	movie: MovieReducers,
	activeUser: ActiveUserReducers,
});

export default allReducers;

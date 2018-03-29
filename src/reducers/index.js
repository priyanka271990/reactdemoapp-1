import {combineReducers} from 'redux';
import UserReducers from './user.reducers';
import MovieReducers from './movie.reducers';
import ActiveUserReducers from './active.user.reducers';
import TelevisionReducers from './television.reducers';

const allReducers = combineReducers({
	activeUser: ActiveUserReducers,
	movie: MovieReducers,
	television: TelevisionReducers,
	user: UserReducers,
});

export default allReducers;

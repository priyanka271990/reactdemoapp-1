import {combineReducers} from 'redux';
import UserReducers from './user.reducers';
import MovieReducers from './movie.reducers';

const allReducers = combineReducers({
	user: UserReducers,
	movie: MovieReducers
});

export default allReducers;

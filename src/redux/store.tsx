import movieReducer from './slice/movieSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: movieReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

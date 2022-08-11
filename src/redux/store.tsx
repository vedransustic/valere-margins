import movieReducer from './slice/movieSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: movieReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

store.subscribe(() => {
	localStorage.setItem('persistantState', JSON.stringify(store.getState()));
});

export default store;

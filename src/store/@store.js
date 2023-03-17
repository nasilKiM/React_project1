import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'reducer';
import logger from 'redux-logger';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development', // true, false
	middleware: defaultMiddleware => {
		if (process.env.NODE_ENV === 'development') {
			return [...defaultMiddleware(), logger];
		}
		return defaultMiddleware();
	},
});

import { configureStore } from '@reduxjs/toolkit';
import linksSlice from './links/linksSlice';

const store = configureStore({
	reducer: {
		links: linksSlice,
	},
	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

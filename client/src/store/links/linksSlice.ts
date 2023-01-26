import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ILink {
	linkId: string;
	link: string;
	shortLink: string;
}

interface IState {
	items: ILink[];
	loading: boolean;
}

const initialState: IState = {
	items: [],
	loading: false,
};

export const getLink = createAsyncThunk(
	'links/getLinks',
	async (link: string, { rejectWithValue }) => {
		try {
			const response = await axios.post<ILink>(`/short`, {
				link,
			});
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const linksSlice = createSlice({
	name: 'links',
	initialState,
	reducers: {
		removeLink: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(link => {
				return link.linkId !== action.payload;
			});
		},
	},
	extraReducers: builder => {
		builder.addCase(getLink.pending, (state, _) => {
			state.loading = true;
		});
		builder.addCase(
			getLink.fulfilled,
			(state, action: PayloadAction<ILink>) => {
				state.items = [action.payload, ...state.items];
				state.loading = false;
			}
		);
	},
});

export const { removeLink } = linksSlice.actions;

export default linksSlice.reducer;

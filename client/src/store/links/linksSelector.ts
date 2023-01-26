import { RootState } from '../configureStore';

export const linksSelector = (state: RootState) => state.links.items;
export const loadingSelector = (state: RootState) => state.links.loading;

'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface searchResultState {
  gameList: any;
  loading: any;
}

const initialState: searchResultState = {
  gameList: [],
  loading: true,
}

export const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    addSearchResults: (state, action) => {
      console.log(state.gameList)
      state.gameList = action.payload;
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    restartLoading: (state) => {
      state.loading = null;
    }
  },
})

export const { addSearchResults, startLoading, restartLoading } = searchResultSlice.actions

export default searchResultSlice.reducer

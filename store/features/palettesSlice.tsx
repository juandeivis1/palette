import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Palette} from '../../types';

export interface PalettesState {
  value: Palette[];
}

const initialState: PalettesState = {
  value: [],
};

export const palettesSlice = createSlice({
  name: 'palettes',
  initialState,
  reducers: {
    addPalette: (state, action: PayloadAction<Palette>) => {
      state.value = [action.payload, ...state.value];
    },
    setPalettes: (state, action: PayloadAction<Palette[]>) => {
      state.value = action.payload;
    },
  },
});

export const {setPalettes, addPalette} = palettesSlice.actions;

export default palettesSlice.reducer;

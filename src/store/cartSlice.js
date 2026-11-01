import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      state.items.push(action.payload);
    },

    remover: (state, action) => {
      state.items.splice(action.payload, 1);
    },

    limpar: (state) => {
      state.items = [];
    },
  },
});

export const { adicionar, remover, limpar } = cartSlice.actions;

export default cartSlice.reducer;
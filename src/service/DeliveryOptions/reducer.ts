import { Delivery } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeliveryOptionsState {
  options: Delivery[];
}

const initialState: DeliveryOptionsState = {
  options: [],
};

const DeliveryOptionsSlice = createSlice({
  name: 'DeliveryOptions',
  initialState,
  reducers: {
    setDeliveryOptions: (state, action: PayloadAction<Delivery[]>) => {
        state.options = action.payload;
    },
    clearDeliveryOptions: (state) => {
        state.options = [];
    }
  },
});

export const DeliveryOptionsReducer = DeliveryOptionsSlice.reducer;
export const {setDeliveryOptions, clearDeliveryOptions} = DeliveryOptionsSlice.actions;

import { Address, Delivery, Point, TPayer, User } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MakeOrderState {
  senderPoint: Point | null;
  senderAddress: Address | null;
  sender: User | null;
  receiverPoint: Point | null;
  receiverAddress: Address | null;
  receiver: User | null;
  payer: TPayer | null;
  option: Delivery | null;
}

const initialState: MakeOrderState = {
  option: null,
  payer: null,
  receiver: null,
  receiverAddress: null,
  receiverPoint: null,
  sender: null,
  senderAddress: null,
  senderPoint: null,
};

const MakeOrderSlice = createSlice({
  name: 'MakeOrder',
  initialState,
  reducers: {
    setSenderPoint: (state, action: PayloadAction<Point>) => {
      state.senderPoint = action.payload;
    },
    setSenderAddress: (state, action: PayloadAction<Address>) => {
      state.senderAddress = action.payload;
    },
    setSender: (state, action: PayloadAction<User>) => {
      state.sender = action.payload;
    },
    setReceiverPoint: (state, action: PayloadAction<Point>) => {
      state.receiverPoint = action.payload;
    },
    setReceiverAddress: (state, action: PayloadAction<Address>) => {
      state.receiverAddress = action.payload;
    },
    setReceiver: (state, action: PayloadAction<User>) => {
      state.receiver = action.payload;
    },
    setPayed: (state, action: PayloadAction<TPayer>) => {
      state.payer = action.payload;
    },
    setOption: (state, action: PayloadAction<Delivery>) => {
      state.option = action.payload;
    },
    clearAllMakeOrder: (state) => {
      state.option = null;
      state.payer = null;
      state.receiver = null;
      state.receiverAddress = null;
      state.receiverPoint = null;
      state.sender = null;
      state.senderAddress = null;
      state.senderPoint = null;
    }
  },
});

export const MakeOrderReducer = MakeOrderSlice.reducer;
export const {
  setOption,
  setPayed,
  setReceiver,
  setReceiverAddress,
  setReceiverPoint,
  setSender,
  setSenderAddress,
  setSenderPoint,
  clearAllMakeOrder,
} = MakeOrderSlice.actions;

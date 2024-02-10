import { DeliveryOptionsReducer } from '@/service/DeliveryOptions';
import { DeliveryService } from '@/service/DeliveryService';
import { MakeOrderReducer } from '@/service/MakeOrder';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducers = combineReducers({
  [DeliveryService.reducerPath]: DeliveryService.reducer,
  DeliveryOptionsReducer,
  MakeOrderReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DeliveryService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

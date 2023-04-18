import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "../reducers";


export const store = configureStore({
  reducer: 
   rootReducer,
   middleware: [thunkMiddleware]

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

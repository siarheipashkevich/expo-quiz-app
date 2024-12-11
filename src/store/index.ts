import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './global-slice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ thunk: false, serializableCheck: false });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

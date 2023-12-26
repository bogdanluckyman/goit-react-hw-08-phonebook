import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

import { configureStore } from '@reduxjs/toolkit';
import senhaReducer from '../../components/senha/senhaSlice.js';

const store = configureStore({
  reducer: {
    senhas: senhaReducer,
  },
});

export default store;

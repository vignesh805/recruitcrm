import { configureStore } from '@reduxjs/toolkit';
import formReducer from './FormSlice.jsx'; // Adjust the import path based on your file structure

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;

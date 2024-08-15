import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from '../redux/slices/widgetSlice';

const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
});

export default store;

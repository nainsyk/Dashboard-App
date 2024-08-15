import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from './redux/slices/widgetSlice';
import Dashboard from '../src/component/Dashboard';
import './index.css';

const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

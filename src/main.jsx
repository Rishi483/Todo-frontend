import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import Store from '../redux/Store.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App />
      </ThemeProvider>
    </Provider>
)

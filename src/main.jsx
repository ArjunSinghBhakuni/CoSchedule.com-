import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
   <ReduxProvider store={store}>
      {/* <BrowserRouter> */}
      <Router>
          <ChakraProvider>
            <App />
          </ChakraProvider>
      </Router>
      {/* </BrowserRouter> */}
   </ReduxProvider>,
 )
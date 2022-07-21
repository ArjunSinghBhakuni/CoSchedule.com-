import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
// import { CartProvider} from "react-use-cart";
import { store } from "./Redux/store";
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ReduxProvider store={store}>
    {/* <CartProvider> */}
    <Router>
      
        <ChakraProvider>
          <App />
        </ChakraProvider>
        
      </Router>
      {/* </CartProvider> */}
      </ReduxProvider>
  
)

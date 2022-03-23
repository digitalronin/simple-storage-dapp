import React from 'react';
import ReactDOM from 'react-dom';
import {DAppProvider} from "@usedapp/core"
import './index.css';
import App from './App';

const config = {
  multicallAddresses: {
    "1337": "0x0000000000000000000000000000000000000000",
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

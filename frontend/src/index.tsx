import React from 'react';
import ReactDOM from 'react-dom';
import {DAppProvider} from "@usedapp/core"
import './index.css';
import App from './App';

const config = {
  multicallAddresses: {
    "1337": "0xedf60d8b70c7b7197fb174da69de8e2bf34abcfe",
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

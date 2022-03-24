# Simple Storage Dapp

This is a "full-stack" (i.e. smart contracts plus a web front-end) implementation of the simplest possible Dapp.

The smart contract stores and updates a "message" string, and the front-end displays the message and enables the user to update it with a new value.

## Deployed

The app. is deployed on GitHub Pages, and can be viewed [here][deployed url].

> The SimpleStorage contract is deployed on the Rinkeby test network, so that's the only network you can use if you want to interact with the deployed app.

## TODO

- Use a modal to force user to connect wallet
- Show the currently-connected chain
- Prompt the user to switch to a supported chain
- Make it mobile-friendly
- Replace favicon.ico and logoXXX.png
- refresh the app. if the user switches chains/accounts
- Disconnect if the user switches accounts in their wallet
- Stay connected on page refresh (if possible)
- Enable user to hit return in the input field to update the message

[deployed url]: https://digitalronin.github.io/simple-storage-dapp/frontend/build/

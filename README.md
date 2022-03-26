# Simple Storage Dapp

This is a "full-stack" (i.e. smart contracts plus a web front-end) implementation of the simplest possible Dapp.

The smart contract stores and updates a "message" string, and the front-end displays the message and enables the user to update it with a new value.

## Deployed

The app. is deployed on GitHub Pages, and can be viewed [here][deployed url].

> The SimpleStorage contract is deployed on the Rinkeby test network, so that's the only network you can use if you want to interact with the deployed app.

A [GitHub Action](.github/workflows/deploy.yml) automatically redeploys the frontend whenever a change is pushed to the `main` branch.

## TODO

- Use a modal to force user to connect wallet
- Prompt the user to switch to a supported chain
- Disconnect if the user switches accounts in their wallet
- Stay connected on page refresh (if possible)
- Enable user to hit return in the input field to update the message

[deployed url]: https://digitalronin.github.io/simple-storage-dapp/frontend/build/

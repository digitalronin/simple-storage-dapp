import {useEthers, shortenIfAddress} from "@usedapp/core"

export const Header = () => {
  const {account, activateBrowserWallet, deactivate} = useEthers()

  return (
    <div>
      {account ? (
        <div>
          <p>
            {shortenIfAddress(account)}
            <button onClick={() => deactivate()}>Disconnect</button>
          </p>
        </div>
      ) : (
        <button onClick={() => activateBrowserWallet()}>Connect wallet</button>
      )}
    </div>
  )
}

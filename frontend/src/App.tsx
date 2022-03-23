import {useEthers} from "@usedapp/core"
import {Header} from "./components/Header"
import {DisplayMessage} from "./components/DisplayMessage"
import {UpdateMessage} from "./components/UpdateMessage"
import mapJson from "./contract-data/deployments/map.json"

function App() {
  const {account, chainId} = useEthers()

  function getSimpleStorageContractAddress(chainId: string | number | undefined, mapJson: any) {
    if (chainId === undefined) {
      return "0x0000000000000000000000000000000000000000"
    } else {
      const lookup = chainId == 1337 ? "dev" : String(chainId)
      return mapJson[lookup]["SimpleStorage"][0]
    }
  }

  console.log(chainId)
  console.log("contract", getSimpleStorageContractAddress(chainId, mapJson))

  return (
    <div>
      <Header />
      {account ? (
        <div>
          <DisplayMessage />
          <UpdateMessage />
        </div>
      ) : (
        <p>Please connect your wallet</p>
      )}
    </div>
  );
}

export default App;

import {useEthers} from "@usedapp/core"
import {Header} from "./components/Header"
import {DisplayMessage} from "./components/DisplayMessage"
import {UpdateMessage} from "./components/UpdateMessage"
import mapJson from "./contract-data/deployments/map.json"
import {getSimpleStorageContractAddress} from "./utils"

function App() {
  const {account, chainId} = useEthers()
  const contractAddress = getSimpleStorageContractAddress(chainId, mapJson)

  return (
    <div>
      <Header />
      {account ? (
        <div>
          <p>contractAddress: {contractAddress}</p>
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

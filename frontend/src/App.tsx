import {useEthers} from "@usedapp/core"
import {Container} from "@material-ui/core"
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
      <Container maxWidth="md">
        <Header />
        {account ? (
          <div>
            <DisplayMessage contractAddress={contractAddress} />
            <UpdateMessage contractAddress={contractAddress} />
          </div>
        ) : (
          <p>Please connect your wallet</p>
        )}
      </Container>
    </div>
  );
}

export default App;

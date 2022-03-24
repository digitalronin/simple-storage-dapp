import {useEthers} from "@usedapp/core"
import {Container, makeStyles} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import {Header} from "./components/Header"
import {DisplayMessage} from "./components/DisplayMessage"
import {UpdateMessage} from "./components/UpdateMessage"
import mapJson from "./contract-data/deployments/map.json"
import {getSimpleStorageContractAddress} from "./utils"

const useStyles = makeStyles((theme) => ({
  spaced: {
    margin: theme.spacing(2)
  }
}))

function App() {
  const classes = useStyles()
  const {account, chainId} = useEthers()
  const contractAddress = getSimpleStorageContractAddress(chainId, mapJson)

  return (
    <div>
      <Container maxWidth="md">
        <Header />
        <h1 className={classes.spaced}>Simple Storage Dapp</h1>
        {account ? (
          <div>
            <DisplayMessage contractAddress={contractAddress} />
            <UpdateMessage contractAddress={contractAddress} />
          </div>
        ) : (
          <Alert severity="info">Please connect your wallet</Alert>
        )}
      </Container>
    </div>
  );
}

export default App;

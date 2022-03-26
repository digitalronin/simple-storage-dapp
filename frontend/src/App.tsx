import {useEthers} from "@usedapp/core"
import {Container, makeStyles, Chip, Avatar} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import {Header} from "./components/Header"
import {DisplayMessage} from "./components/DisplayMessage"
import {UpdateMessage} from "./components/UpdateMessage"
import mapJson from "./contract-data/deployments/map.json"
import {getSimpleStorageContractAddress} from "./utils"

const useStyles = makeStyles((theme) => ({
  spaced: {
    margin: theme.spacing(2)
  },
  footer: {
    marginTop: theme.spacing(3),
    textAlign: "center"
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
        <footer className={classes.footer}>
          <Chip
            label="View source on GitHub"
            component="a"
            href="https://github.com/digitalronin/simple-storage-dapp"
            avatar={<Avatar alt="GitHub" src="https://external-content.duckduckgo.com/ip3/github.com.ico" />}
            clickable
          />
        </footer>
      </Container>
    </div>
  );
}

export default App;

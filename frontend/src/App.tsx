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
        <div className={classes.spaced}>
          <h1>Simple Storage Dapp</h1>
          <p>
            This is a 'full-stack' implementation of the simplest possible Dapp.
          </p>
          <p>
            A 'SimpleStorage' smart contract stores a message on the blockchain, which can be updated by anyone.
          </p>
          <p>
            The purpose of this app. is to provide a simple working example around which to implement all of the 'housekeeping' required for a Dapp; i.e. the non-functional code required by any Dapp such as (dis)connecting a wallet, managing the UI elements, and providing feedback on transaction status.
          </p>
        </div>
        <DisplayMessage contractAddress={contractAddress} />
        {account ? (
          <div>
            <UpdateMessage contractAddress={contractAddress} />
          </div>
        ) : (
          <Alert severity="info" className={classes.spaced}>Please connect your wallet to update the message</Alert>
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

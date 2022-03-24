import {useEthers, shortenIfAddress} from "@usedapp/core"
import {Button, makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1)
  }
}))

export const Header = () => {
  const classes = useStyles()
  const {account, activateBrowserWallet, deactivate} = useEthers()

  return (
    <div className={classes.container}>
      {account ? (
        <div>
          <p>
            {shortenIfAddress(account)}
            <Button color="primary" variant="contained" onClick={() => deactivate()}>Disconnect</Button>
          </p>
        </div>
      ) : (
        <Button color="primary" variant="contained" onClick={() => activateBrowserWallet()}>Connect wallet</Button>
      )}
    </div>
  )
}

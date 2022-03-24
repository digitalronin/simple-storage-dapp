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

  const wallet = shortenIfAddress(account)

  return (
    <div className={classes.container}>
      {account ? (
        <Button color="primary" variant="contained" onClick={() => deactivate()}>Disconnect ({wallet})</Button>
      ) : (
        <Button color="primary" variant="contained" onClick={() => activateBrowserWallet()}>Connect wallet</Button>
      )}
    </div>
  )
}

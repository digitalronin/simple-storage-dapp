import {useEthers, shortenIfAddress, ChainId} from "@usedapp/core"
import {Button, makeStyles, Chip} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1)
  },
  spaceRight: {
    marginRight: theme.spacing(2)
  }
}))

export const Header = () => {
  const classes = useStyles()
  const {account, chainId, activateBrowserWallet, deactivate} = useEthers()

  const wallet = shortenIfAddress(account)
  const chainName = chainId !== undefined ? ChainId[chainId] : "Not connected"

  return (
    <div className={classes.container}>
      {account ? (
        <div>
          <Chip label={chainName} className={classes.spaceRight} />
          <Button color="primary" variant="contained" onClick={() => deactivate()}>Disconnect ({wallet})</Button>
        </div>
      ) : (
        <Button color="primary" variant="contained" onClick={() => activateBrowserWallet()}>Connect wallet</Button>
      )}
    </div>
  )
}

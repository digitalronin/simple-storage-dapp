import {Card, CardContent, Typography, makeStyles} from "@material-ui/core"
import {useGetMessage} from "../hooks/useGetMessage"

export interface DisplayMessageProps {
  contractAddress: string
}

const useStyles = makeStyles((theme) => ({
  spaced: {
    margin: theme.spacing(2)
  }
}))

export const DisplayMessage = ({contractAddress}: DisplayMessageProps) => {
  const classes = useStyles()
  const message = useGetMessage(contractAddress)

  return (
    <Card className={classes.spaced}>
      <CardContent>
        Message
        <Typography variant="h5" component="div">{message}</Typography>
      </CardContent>
    </Card>
  )
}

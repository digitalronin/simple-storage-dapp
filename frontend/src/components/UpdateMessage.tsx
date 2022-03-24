import React, {useState} from "react"
import {makeStyles, Card, CardContent, Input, Button} from "@material-ui/core"
import {useUpdateMessage} from "../hooks/useUpdateMessage"

export interface UpdateMessageProps {
  contractAddress: string
}

const useStyles = makeStyles((theme) => ({
  spaced: {
    margin: theme.spacing(2)
  }
}))

export const UpdateMessage = ({contractAddress}: UpdateMessageProps) => {
  const classes = useStyles()
  const [message, setMessage] = useState<string>("")
  const {updateMessage, state: updateMessageState} = useUpdateMessage(contractAddress)
  const isMining = updateMessageState.status === "Mining"
  const isInputEmpty = message === ""

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    return updateMessage(message)
  }

  return (
    <Card className={classes.spaced}>
      <CardContent>
        Update Message
      </CardContent>
      <CardContent>
        <Input type="text" onChange={handleInputChange} value={message} className={classes.spaced} />
        <Button
          variant="outlined"
          disabled={isMining || isInputEmpty}
          onClick={handleSubmit}>
          Update
        </Button>
      </CardContent>
    </Card>
  )
}

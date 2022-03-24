import React, {useState} from "react"
import {useUpdateMessage} from "../hooks/useUpdateMessage"

export interface UpdateMessageProps {
  contractAddress: string
}

export const UpdateMessage = ({contractAddress}: UpdateMessageProps) => {
  const [message, setMessage] = useState<string>("")
  const {updateMessage, state: updateMessageState} = useUpdateMessage(contractAddress)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    return updateMessage(message)
  }

  return (
    <div>
      UpdateMessage
      <p>
        <input type="text" onChange={handleInputChange} value={message} />
        <button onClick={handleSubmit}>Update</button>
      </p>
    </div>
  )
}

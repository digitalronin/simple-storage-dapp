import {useGetMessage} from "../hooks/useGetMessage"

export interface DisplayMessageProps {
  contractAddress: string
}

export const DisplayMessage = ({contractAddress}: DisplayMessageProps) => {
  const message = useGetMessage(contractAddress)

  return (
    <div>
      DisplayMessage {contractAddress}
      <p>Message: {message}</p>
    </div>
  )
}

export interface UpdateMessageProps {
  contractAddress: string
}

export const UpdateMessage = ({contractAddress}: UpdateMessageProps) => {
  return (
    <div>
      UpdateMessage {contractAddress}
    </div>
  )
}

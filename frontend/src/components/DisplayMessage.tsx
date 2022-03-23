export interface DisplayMessageProps {
  contractAddress: string
}

export const DisplayMessage = ({contractAddress}: DisplayMessageProps) => {
  return (
    <div>
      DisplayMessage {contractAddress}
    </div>
  )
}

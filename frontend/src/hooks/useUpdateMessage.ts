import {utils} from "ethers"
import {useContractFunction} from "@usedapp/core"
import {Contract} from "@ethersproject/contracts"
import SimpleStorage from "../contract-data/contracts/SimpleStorage.json"

export const useUpdateMessage = (contractAddress: string) => {
  const ssInterface = new utils.Interface(SimpleStorage.abi)
  const ssContract = new Contract(contractAddress, ssInterface)

  const {send: updateMessageSend} = useContractFunction(ssContract, "update", {transactionName: "Update Message"})

  const updateMessage = (message: string) => {
    return updateMessageSend(message)
  }

  return {updateMessage, state: "Update message state"}
}

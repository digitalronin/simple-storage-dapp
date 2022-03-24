import {useEffect, useState} from "react"
import {utils} from "ethers"
import {useContractFunction} from "@usedapp/core"
import {Contract} from "@ethersproject/contracts"
import SimpleStorage from "../contract-data/contracts/SimpleStorage.json"

export const useUpdateMessage = (contractAddress: string) => {
  const ssInterface = new utils.Interface(SimpleStorage.abi)
  const ssContract = new Contract(contractAddress, ssInterface)

  const {send: updateMessageSend, state: updateMessageState} = useContractFunction(ssContract, "update", {transactionName: "Update Message"})

  const [state, setState] = useState(updateMessageState)

  const updateMessage = (message: string) => {
    return updateMessageSend(message)
  }

  useEffect(() => {
    setState(updateMessageState)

    if (updateMessageState.status === "Success") {
      console.log("message updated")
    } else {
      if (updateMessageState.errorMessage !== undefined) {
        console.log(`error: ${updateMessageState.errorMessage}`)
      }
    }
  }, [updateMessageState])

  return {updateMessage, state}
}

import {useCall} from "@usedapp/core"
import {utils} from "ethers"
import {Contract} from "@ethersproject/contracts"
import SimpleStorage from "../contract-data/contracts/SimpleStorage.json"

export const useGetMessage = (contractAddress: string): string => {
  const ssInterface = new utils.Interface(SimpleStorage.abi)
  const ssContract = new Contract(contractAddress, ssInterface)

  const {value: message} = useCall({
    contract: ssContract,
    method: "message",
    args: []
  }) ?? {}

  return String(message)
}

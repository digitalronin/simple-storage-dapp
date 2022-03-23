export const getSimpleStorageContractAddress = (chainId: string | number | undefined, mapJson: any) => {
  if (chainId === undefined) {
    return "0x0000000000000000000000000000000000000000"
  } else {
    const lookup = chainId == 1337 ? "dev" : String(chainId)
    return mapJson[lookup]["SimpleStorage"][0]
  }
}

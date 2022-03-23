import {useEthers} from "@usedapp/core"
import {Header} from "./components/Header"

function App() {
  const {account} = useEthers()

  return (
    <div>
      <Header />
      {account ? (
        <p>Connected</p>
      ) : (
        <p>Please connect your wallet</p>
      )}
    </div>
  );
}

export default App;

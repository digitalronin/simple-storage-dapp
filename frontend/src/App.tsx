import {useEthers} from "@usedapp/core"
import {Header} from "./components/Header"
import {DisplayMessage} from "./components/DisplayMessage"
import {UpdateMessage} from "./components/UpdateMessage"

function App() {
  const {account} = useEthers()

  return (
    <div>
      <Header />
      {account ? (
        <div>
          <DisplayMessage />
          <UpdateMessage />
        </div>
      ) : (
        <p>Please connect your wallet</p>
      )}
    </div>
  );
}

export default App;

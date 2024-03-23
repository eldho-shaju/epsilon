import "./App.scss";
import Layout from "./Components/Layout";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </div>
  );
}

export default App;

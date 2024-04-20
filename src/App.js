import { RecoilRoot } from "recoil";
import Layout from "./Components/Layout";
import "./App.scss";

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

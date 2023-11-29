import "./styles/App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeComponent from "./components/CakeComponent";
import IceComponent from "./components/IceComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <IceComponent />
      </div>
    </Provider>
  );
}

export default App;

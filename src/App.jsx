import "./styles/App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeComponent from "./components/CakeComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
      </div>
    </Provider>
  );
}

export default App;

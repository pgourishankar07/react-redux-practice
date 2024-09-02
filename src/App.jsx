import "./styles/App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeComponent from "./components/CakeComponent";
import IceComponent from "./components/IceComponent";
import PizzaComponent from "./components/PizzaComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <IceComponent />
        <PizzaComponent />
      </div>
    </Provider>
  );
}

export default App;
// https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK

/*
1. create store and init state
2. reducer function
3. dispatch the action
4. Provider in app

steps : 
1. button clicked
2. dispatch the action
3. go to the store 
4. calls the reducer function
5. return the updated data to store
6. updates the UI
*/

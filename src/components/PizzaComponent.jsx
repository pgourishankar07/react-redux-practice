import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyPizza } from "../redux/pizza/pizzaAction";

const PizzaComponent = () => {
  const noOfPizza = useSelector((state) => state.pizza.noOfPizza);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Pizza : {noOfPizza}</h2>
      <button onClick={() => dispatch(buyPizza())}>Buy Pizza</button>
      {/* buyPizza for passing the function as aparmeter and buyPizza() calling the function immedialtely */}
      {/* ()=> function() when you want to delay the execution of the function until a specific event occurs (e.g., a user clicks a button, a form is submitted, or a component lifecycle event happens)./ function() --- Use function() when you want the function to execute immediately at that point in your code. */}
    </div>
  );
};

export default PizzaComponent;

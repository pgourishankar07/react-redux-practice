const initState = {
  noOfPizza: 5,
};

const pizzareducer = (state = initState, action) => {
  switch (action.type) {
    case "BUY_PIZZA":
      return { ...state, noOfPizza: state.noOfPizza - 1 };

    default:
      return state;
  }
};

export default pizzareducer;

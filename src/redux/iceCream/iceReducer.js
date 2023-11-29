const initState = {
  numOfIce: 20,
};

const icereducer = (state = initState, action) => {
  switch (action.type) {
    case "BUY_ICE":
      return {
        ...state,
        numOfIce: state.numOfIce - 1,
      };
    default:
      return state;
  }
};

export default icereducer;

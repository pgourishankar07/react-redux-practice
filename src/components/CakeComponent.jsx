//____this methods involves use of useSelector and useDispatch hooks instead of connect method

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeComponent = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};
export default CakeComponent;

/**
import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeComponent = (props) => {
  return (
    <div>
      <h2>Number of Cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//connect -- connects the respective react component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);

 */

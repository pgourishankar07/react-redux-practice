import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIce } from "../redux/iceCream/iceActions";

const IceComponent = () => {
  const numOfIce = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams : {numOfIce}</h2>
      <button onClick={() => dispatch(buyIce())}>Buy Ice Creams</button>
    </div>
  );
};

export default IceComponent;

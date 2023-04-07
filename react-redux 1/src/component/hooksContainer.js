import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyIceCream } from "../redux/cakeAction";
function HooksContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const numOfIcecreams = useSelector((state) => state.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        number of cake- {numOfCakes}
        <h1>number of icecream- {numOfIcecreams}</h1>
        <button onClick={()=>dispatch(buyIceCream())}>buyIceCream</button>
      </h1>
      <button onClick={() => dispatch(buyCake())}>click me</button>
    </div>
  );
}

export default HooksContainer;

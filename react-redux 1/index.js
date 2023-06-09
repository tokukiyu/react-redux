const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const redux = require("redux");
const createStore = redux.createStore;
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}
const initialState = {
  numOfCake: 10,
  numOfIcecreams: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1 
      };
    case BUY_ICECREAM:
      return {
        
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      };

    default:
      return state;
  }
};
const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

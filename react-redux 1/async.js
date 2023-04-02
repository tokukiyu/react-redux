const axios = require("axios");
const thunk = require("redux-thunk");
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// Action Types
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// Action Creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

// Async Action Creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map(user=>user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUserFailure(errorMessage));
      });
  };
};

// Initial State
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(userReducer, applyMiddleware(thunk.default));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());

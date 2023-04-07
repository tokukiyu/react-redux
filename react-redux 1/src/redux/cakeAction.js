import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  BUY_CAKE,
  BUY_ICECREAM,
} from "./type";

export function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
    payload: number,
  };
}

export function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First Redux action",
  };
}

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

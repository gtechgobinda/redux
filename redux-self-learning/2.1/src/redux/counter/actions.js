import { DECREMENT, INCREMENT } from "./actionTypes.js";
export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

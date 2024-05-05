// select dom elements
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");
const addAnotherEl=document.getElementById("addAnother");
const allMatchesContainer=document.getElementById("all-matches-container");


// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

//initial value
const initialState = {
  value: 0,
};

//create render function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    const decrementedValue = state.value - action.payload;
    const modifiedDecrementedValue =
      decrementedValue < 0 ? 0 : decrementedValue;
    return {
      ...state,
      value: modifiedDecrementedValue,
    };
  } else {
    return state;
  }
}

//create store
const store = Redux.createStore(counterReducer);

//create render function
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

//update UI initially
render();
store.subscribe(render);

//listener

incrementEl.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const incrementValue = parseFloat(incrementEl.value);
    store.dispatch(increment(incrementValue));
    incrementEl.value = "";
  }
});
decrementEl.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const decrementValue = parseFloat(decrementEl.value);
    store.dispatch(decrement(decrementValue));
    decrementEl.value = "";
  }
});

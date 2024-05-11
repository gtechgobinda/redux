// select dom elements
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");
const addAnotherEl = document.getElementById("addAnother");
const allMatchesContainer = document.getElementById("all-matches-container");

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
  event.stopPropagation();
});
decrementEl.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const decrementValue = parseFloat(decrementEl.value);
    store.dispatch(decrement(decrementValue));
    decrementEl.value = "";
  }
  event.stopPropagation();
});

let matchCount = 1;

addAnotherEl.addEventListener("click", function () {
  const newMatch = document.createElement("div");
  newMatch.classList.add("match");

  newMatch.innerHTML = `
  <div class="wrapper">
  <button class="lws-delete">
      <img src="./image/delete.svg" alt="" />
  </button>
  <h3 class="lws-matchName">Match 1</h3>
</div>
<div class="inc-dec">
  <form class="incrementForm">
      <h4>Increment</h4>
      <input type="number" name="increment" class="lws-increment" id="increment" />
  </form>
  <form class="decrementForm">
      <h4>Decrement</h4>
      <input type="number" name="decrement" class="lws-decrement" id="decrement" />
  </form>
</div>
<div class="numbers">
  <h2 class="lws-singleResult" id="counter">120</h2>
</div>
  `;

  allMatchesContainer.appendChild(newMatch);
  matchCount++;
});



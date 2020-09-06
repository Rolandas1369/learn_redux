import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from './components/app'

// import { inc, dec, rnd } from './actions'
// is same as above
import React from "react";
import ReactDom from "react-dom";
// import * as actions from "./actions";
import Counter from "./components/counter";
console.log("ok");

// moving reducer and actions to another different files

const store_example = () => {
  // reducer from above as action
  const store = createStore(reducer);
  // get current value of state is is 0 from default state = 0
  console.log(store.getState());
  // get reducer action from store
  store.dispatch({ type: "INC" }); // +1
  store.dispatch({ type: "INC" }); // +1
  console.log(store.getState()); // 2

  // acts on state change
  store.subscribe(() => {
    console.log(store.getState());
  });

  // trigers subscribe and print 3
  store.dispatch({ type: "INC" }); // +1
  store.dispatch({ type: "INC" }); // +1

  //pure functions
  // return values depends on passable args
  // (a, b) => a > b ? a : b
  // (a) => Math.random() * a not pure function

  //cant change global values must work only in local scope db, node, dom are globals and cant be changed
  // timouts are global
  // reducers must be pure functions,use of Math random breaks pure function
};

const store = createStore(reducer);

const hardcoded_type_for_actions = () => {
  document.getElementById("inc").addEventListener("click", () => {
    // after click fires this function what go to store dispach
    console.log("In Inc button event");
    store.dispatch({ type: "INC" });
  });

  document.getElementById("dec").addEventListener("click", () => {
    // after click fires this function what go to store dispac
    console.log("In Dec button event");
    store.dispatch({ type: "DEC" });
  });

  document.getElementById("rnd").addEventListener("click", () => {
    // after click fires this function what go to store dispac
    // payload is tipical name for args
    const payload = Math.floor(Math.random() * 10);
    const payload1 = Math.floor(Math.random() * 10);

    console.log("In RAND button event");
    // passable as one object
    store.dispatch({ type: "RND", payload, payload1 });
  });

  const update = () => {
    // select counter text number
    let x = (document.getElementById("counter").innerHTML = store.getState());
    console.log("update function", x);
  };

  // fires function update then click button in clicked
  // subscribe add sunction to store
  store.subscribe(update);
};

const actions_in_one_file = () => {
  const inc = () => ({ type: "INC" });
  const dec = () => ({ type: "DEC" });
  const rnd = (payload, payload1) => ({ type: "RND", payload, payload1 });

  document.getElementById("inc").addEventListener("click", () => {
    // after click fires this function what go to store dispach
    console.log("In Inc button event");
    store.dispatch(inc());
  });

  document.getElementById("dec").addEventListener("click", () => {
    // after click fires this function what go to store dispac
    console.log("In Dec button event");
    store.dispatch(dec());
  });

  document.getElementById("rnd").addEventListener("click", () => {
    // after click fires this function what go to store dispac
    // payload is tipical name for args
    const payload = Math.floor(Math.random() * 10);
    const payload1 = Math.floor(Math.random() * 10);

    console.log("In RAND button event");
    // passable as one object
    store.dispatch(rnd(payload, payload1));
  });

  const update = () => {
    // select counter text number
    let x = (document.getElementById("counter").innerHTML = store.getState());
    console.log("update function", x);
  };

  // fires function update then click button in clicked
  // subscribe add sunction to store
  store.subscribe(update);
};
// destructure dispach
// const { dispatch } = store;

// example of action creator
const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};

// // incDispatch becomes => inc and so one
// const { actions } = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd,
// }, dispatch)

// above is full version

// incDispatch becomes => inc and so one
// const { inc, dec, rnd, div } = bindActionCreators(actions, dispatch);

// const without_action = () => {
//   // more readabilyti
//   const incDispatch = () => dispatch(inc());
//   const decDispatch = () => dispatch(dec());
//   const rndDispatch = (payload, payload1) => dispatch(rnd(payload, payload1));
// };

// // below function replace incDispatch to inc ...
// document.getElementById("inc").addEventListener("click", inc);

// document.getElementById("dec").addEventListener("click", dec);

// document.getElementById("rnd").addEventListener("click", () => {
//   // after click fires this function what go to store dispac
//   // payload is tipical name for args
//   const payload = Math.floor(Math.random() * 10);
//   const payload1 = Math.floor(Math.random() * 10);

//   console.log('In RAND button event')
//   // passable as one object
//   rnd(payload, payload1);
// });

// const update = () => {
  // select counter text number
  // let x = document.getElementById('counter').innerHTML = store.getState();
  // console.log('update function', x)

  // provider works as context api
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
// };

// fires function update then click button in clicked
// subscribe add sunction to store
// update();
// store.subscribe(update);

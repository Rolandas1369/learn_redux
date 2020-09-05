// reducer -> function what makes changes to state
// store is reducer plius state
// action state + function

// initail state is set in reducer = (state = 0) this means what this is default state if no value is present
// const initailState = 0;

// action is setState analog
// state = 0 becouse we need to set value if state is undefiend
const reducer = (state = 0, action) => {
    // if (action.type === "INC") {
    //   return state + 1;
    // }
  
    // switch is more better for case can be more then one action
    switch (action.type) {
      // as meny cases as I want
      case "INC":
        console.log('from reducer INC')
        return state + 1;
      case "DEC":
        console.log('from reducer DEC')
        return state - 1;
      case "RND":
        console.log('from reducer RND', action.payload, action.payload1)
        return state + action.payload + action.payload1;
      default:
        return state;
    }
  };
  
  // // set 0 by setting state = 0
  // let state = reducer(undefined, {})
  // console.log(state)
  
  // // now state is 1
  // state = reducer(state, { type: "INC" });
  // console.log(state)
  
  // // now state is 2
  // state = reducer(state, { type: "INC" });
  // console.log(state)

  export default reducer;
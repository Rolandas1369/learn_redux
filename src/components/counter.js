import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { inc, dec, rnd, div} from '../actions';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd, div }) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button onClick={inc} id="inc" className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={dec} id="dec" className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">
        RAND
      </button>
      <button onClick={div} id="div" className="btn btn-primary btn-lg">
        DIV
      </button>
    </div>
  );
}

// assigns counter state
const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

// append actions as props to stroe
// const mapDispatchToProps = (dispatch) => {

//   // const { inc, dec, rnd, div } = bindActionCreators(actions, dispatch);
//   // returns above code
//   return bindActionCreators(actions, dispatch);
  //code below is equal to code above
  // return {
  //   // inc: () => dispatch(inc()),
  //   // dec: () => dispatch(dec()),
  //   // rnd: () => {
  //   //   const rand = Math.floor(Math.random() * 10)
  //   //   const rand1 = Math.floor(Math.random() * 10)
  //   //   return dispatch(rnd(rand, rand1))
  //   // },
  //   // div: () => dispatch(div())
  //   inc,
  //   dec,
  //   // rnd makes logic in action
  //   rnd,
  //   div

  // }
//}

// connect is returning new component as it is HOC, passing actions and state
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// above code is equal to actions
export default connect(mapStateToProps, actions)(Counter);

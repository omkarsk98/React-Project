import React from 'react';
import { connect } from 'react-redux';


function Counter(props) {
    //console.log('Rendering ', props);
    return (
        <div>
            <b>This is my counter.</b>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
    );
}


//Step1
function mapStateToProps(state) {
    //console.log('Mapping state to props-->', state);
    return {
        count: state.count
    }
}//to return state

//Step 2
function mapDispatchToProps(dispatch) {
    //console.log('Dispatch-->',dispatch);
    return {
        onIncrementClick: () => {
            const action = { type : 'INCREMENT'};
            dispatch(action);
        }
    }//this is an action dispatched by dispatch(action);
}//to return action

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

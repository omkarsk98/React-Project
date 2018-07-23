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

function mapStateToProps(state) {
    //console.log('Mapping state to props-->', state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            //console.log('Clicking');
            const action = { type : 'INCREMENT'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import { useReducer } from "react";

const initialState = {
    count : 0,
    showMyCounting : true
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase' :
            return {
                ...state, 
                count : state.count + 1
            }
        case 'decrease' : 
            return {
                ...state,
                count : state.count - 1
            }
        case 'reset' :
            return {
                ...state,
                count : 0
            }
        case 'show_count' :
            return {
                ...state,
                showMyCounting : !state.showMyCounting
            }
        default :
            return state
    }
}

const Counting = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);
    return (
        <>
            <h1>useReducer hook</h1>
            <button type="buttton" onClick={() => dispatch({type : 'increase'})}>increse count</button>
            <button type="buttton" onClick={() => dispatch({type : 'decrease'})}>decrease count</button>            
            <button type="buttton" onClick={() => dispatch({type : 'reset'})}>reset count</button>
            <button type="buttton" onClick={() => dispatch({type : 'show_count'})}>hide count</button>
            {
                state.showMyCounting ? <p>You have reached {state.count}</p> : null
            }
            
        </>
    );
}

export default Counting;
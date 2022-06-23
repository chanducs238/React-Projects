import { useDispatch, useSelector} from 'react-redux';
import { incrementCount, decrementCount } from './action'


function FuntionBased() {

    const count = useSelector((state) =>{
return state.count;
    } );
    const dispatch = useDispatch();


    return (
        <center>
            <h1>{count}</h1>
            <button style={{ marginRight: "10px"}} onClick={() => dispatch(incrementCount())}>increment</button>
            <button onClick={() => dispatch(decrementCount())}>decrement</button>
        </center>
    )
}

export default FuntionBased;
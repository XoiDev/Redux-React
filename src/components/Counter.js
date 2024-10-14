import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../redux-toolkit/counterSlice';

// redux-core
// import { increment, decrement, incrementbyvalue } from '../redux-core/counter';

const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();
    
    const handleDecrement = ()=>{
        dispatch(decrement())
      
        
    }
    const handleIncrement = () =>{
        dispatch(increment())
    }
    const incrementByValues = ()=>{
        dispatch(incrementByValue(10))
    }
    return (
        <div>
            <div className='flex justify-center mt-10 items-center border border-gray-400 w-[200px] mx-auto'>

                <button onClick={handleDecrement} className='p-4 text-white bg-blue-500 border border-gray-300'>giam</button>
                    <span className="text-xl">{count}</span>
                <button onClick={handleIncrement} className='p-4 text-white bg-red-500 border border-gray-300'>tang</button>
                <button onClick={incrementByValues} className='p-4 text-white bg-red-500 border border-gray-300'>byvalue</button>
            </div>
        </div>
    );
};

export default Counter;
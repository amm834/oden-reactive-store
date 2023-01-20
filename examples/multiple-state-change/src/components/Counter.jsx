import React from 'react';
import {useCounterStore} from "../store/useCounterStore";

const Counter = () => {
    const [count, setCount] = useCounterStore();

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
};

export default Counter;
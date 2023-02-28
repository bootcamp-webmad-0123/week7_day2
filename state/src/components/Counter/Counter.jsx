import { useState } from "react"

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const decrementCounter = () => {
        setCounterValue(counterValue - 1)
    }


    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {counterValue} times</p>

            <button onClick={decrementCounter}> - </button>
            <button onClick={incrementCounter}> + </button>
        </div>
    );
}

export default Counter
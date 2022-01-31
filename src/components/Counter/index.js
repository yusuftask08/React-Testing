import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <br />
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br />
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default Counter

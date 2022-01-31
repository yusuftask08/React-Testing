import { useState } from 'react'

const defaultItems = [
    {
        name: 'item a'
    },
    {
        name: 'item b'
    }, {
        name: 'item c'
    },
]
function Todo() {
    const [text, setText] = useState('')
    const [items, setItems] = useState(defaultItems)
    const addItem = () => {
        setItems((prev) => [...prev, { name: text }])
        setText('')
    }
    return (
        <div>
            <label >Text <input type="text" value={text} onChange={(e) => setText(e.target.value)} /></label>
            <button onClick={addItem}> Add</button>

            <br />
            <br />
            {
                items.map((i, k) =>
                    <div key={k}> {i.name} </div>
                )
            }


        </div>
    )
}

export default Todo

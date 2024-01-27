import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>Count: {count}</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react'
import Counter from './counter';

// App and counter is wrapped in context this means store is now availabel 
const App = () => {
    return (
        <div>
            <Counter />
        </div>
    )
}

export default App;

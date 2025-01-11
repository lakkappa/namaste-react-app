import React from "react";
import ReactDOM from 'react-dom/client';

// This is React Component
const ReactComponent = () => {
    return (
        <div>Hello React Component
            <h2>This is React Component</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactComponent />);

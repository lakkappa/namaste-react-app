import React from "react";
import ReactDOM from 'react-dom/client';

// This is react element
const reactElement = (<div>Hello React Element
    <h2>This is React Element</h2>
</div>
);

// This is React Component
const ReactComponent = () => {
    return (
        <div>Hello React Component
            <h2>This is React Component</h2>
        </div>
    )
}

// This is without return React Component
const ReactWithoutReturn = () => (
    <div>Hello React Component without return
        <h2>This is React Component</h2>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactWithoutReturn />);

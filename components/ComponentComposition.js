import React from "react";
import ReactDOM from 'react-dom/client';


// This is example of ComponentComposition
const Title = () => {
    return (
        <div>
            Namaste React
        </div>
    )
}

const ReactComponent = () => {
    return (
        <div>
            <Title />
            This is a Functional Component
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactComponent />);

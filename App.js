import React, { lazy, Suspense, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
// import './App.css';
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantsMenu from "./src/components/RestaurantsMenu";
import UserContext from "./src/utils/useUserContext";

const Grocery = lazy(() => import('./src/components/Grocery'));
const App = () => {
    const [userName, setUserName] = useState('lucky pujari');
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName: setUserName }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantsMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Looding Grocery Component</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
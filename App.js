import React, { lazy, Suspense, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantsMenu from "./src/components/RestaurantsMenu";
import Cart from "./src/components/Cart";
import Payment from "./src/components/Payment";
import UserContext from "./src/utils/useUserContext";
import appStore from "./src/redux/appStore";
import { Provider } from "react-redux";

const Grocery = lazy(() => import('./src/components/Grocery'));
const App = () => {
    const [userName, setUserName] = useState('lucky pujari');
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName: setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: 'payment',
                element: <Payment />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
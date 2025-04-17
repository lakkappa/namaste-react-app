import { useRouteError } from 'react-router-dom';
const Error = () => {
    const err = useRouteError();
    return (
        <div className="err-container">
            <h1>Opps!!!</h1>
            <h2>Something went wrong, Please check!</h2>
            <h2>Error Status is {err.status}</h2>
            <h2>Error is {err.statusText}</h2>
        </div>
    )
}
export default Error;
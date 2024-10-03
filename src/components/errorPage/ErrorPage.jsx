import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center mt-60">
            <h1 className="text-3xl">{error.status}</h1>
            <p>{error.statusText}</p>
        </div>
    );
};

export default ErrorPage;
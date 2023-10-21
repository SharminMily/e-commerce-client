import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-20">
            <h1 className="text-red-600 text-6xl font-bold pb-4">404</h1>
            <h1 className=" text-3xl font-bold mb-4">Error</h1>
            <Link to="/">
                <button className="p-4 bg-orange-600 rounded-lg text-white text-xl">Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
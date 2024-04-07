import { Link } from "react-router-dom";

const Unauthorized = () => {
    return (
        <>
            <div className="mb-10">
                <div className="space-y-4">
                    <h1 className="mt-6 text-4xl font-extrabold text-gray-900">401</h1>
                    <h3 className="text-xl">Unauthorized</h3>
                    <p className="text-gray-900">
                        You are not authorized to view this page. Please login or sign up.
                    </p>
                    <Link to="/" className="text-purple-600 hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Unauthorized;
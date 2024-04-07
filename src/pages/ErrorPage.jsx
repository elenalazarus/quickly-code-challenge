import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div className="mb-10">
                <div className="space-y-4">
                    <h1 className="mt-6 text-4xl font-extrabold text-gray-900">404</h1>
                    <h3 className="text-xl">Not Found</h3>
                    <p className="text-gray-900">
                        Sorry, an unexpected error occurred.
                    </p>
                    <Link to="/" className="text-purple-600 hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </>
    );
};

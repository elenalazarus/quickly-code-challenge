import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getUserRequest } from '../services/auth';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    // If the token is found in the storage, the user will be fetched.
    // Otherwise  navigate to 401 page
    const fetchUser = async () => {
      try {
        const { data: { user }, } = await getUserRequest();

        setUser(user);
      } catch (err) {
        if (err?.response?.status === 401) {
          navigate("/unauthorized");
        }
      }
    };
    fetchUser();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Account Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal and Company details.</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.full_name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">First Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.first_name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Last Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.last_name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.email}</dd>
            </div>
          </dl>
        </div>
      </div>
      <button
        type='button'
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
        onClick={handleLogOut}
      >
        Sign Out
      </button>
    </div>
  )
}

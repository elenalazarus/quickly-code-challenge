import { useState, useEffect } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

import { useNavigate } from 'react-router-dom';
import loginDataCreator from '../utils/loginDataCreator';
import { login } from '../services/auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const textInputClass = "rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate()

    useEffect(() => {
        // If token is in storage, the user will be navigated to the profile page
        const token = localStorage.getItem("jwtToken") ?? '';

        if (token) {
            navigate("/profile");
        }
    }, []);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Map data before making a request
            const data = loginDataCreator(loginState);
            const { data: result } = await login(data);

            // Getting token as a part of response, storing in local storage
            localStorage.setItem("jwtToken", JSON.stringify(result.token));

            // Navigate user to profile page
            navigate('/profile');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const errorMessage = err.response?.data?.message ?? err.message;
                toast.error(errorMessage, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {
                fields.map(field =>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                        customClass={textInputClass}
                    />
                )
            }

            <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
    )
}
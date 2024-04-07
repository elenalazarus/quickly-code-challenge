import { useState, useEffect } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Checkbox from './Checkbox';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';
import axios from 'axios';
import signUpDataCreator from '../utils/signUpDataCreator';
import { toast } from 'react-toastify';
import { isInputValid } from '../utils/inputValidator';

const textInputClass = "rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
const checkboxInputClass = "rounded-md block"

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => {
  field.type === 'checkbox' ? fieldsState[field.id] = true : fieldsState[field.id] = ''
});

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();

  useEffect(() => {
    // If token is in storage, the user will be navigated to the profile page
    const token = localStorage.getItem("jwtToken") ?? '';

    if (token) {
      navigate("/profile");
    }
  }, []);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.type === 'checkbox' ? !signupState[e.target.id] : e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // All validation rules for inputs are checked here. If invalid => exception is thrown and form is not sent
      isInputValid(fields, signupState);
  
      // Data mapping
      const data = signUpDataCreator(signupState);
      const { data: result } = await register(data);

      // Getting token as a part of the response
      localStorage.setItem("jwtToken", JSON.stringify(result.token));

      navigate("/profile");
    } catch (err) {
      let errorMessage;
      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message ?? err.message;
      } else {
        errorMessage = err.message;
      }

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

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {
        fields.map(field =>
          field.type === 'checkbox'
            ? <Checkbox
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              customClass={checkboxInputClass}
            />
            : <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              customClass={textInputClass}
              minLength={field.minlength}
            />

        )
      }
      <FormAction handleSubmit={handleSubmit} text="Sign up" />
    </form>
  )
}
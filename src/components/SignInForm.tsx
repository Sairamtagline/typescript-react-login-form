import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  logInAttributes,
  loginInitialState,
  LoginInitialState,
} from "../description/signInFrom.description";
import { validation } from "../utils/validation";
import FormButton from "./FormButton";

interface Attribute {
  id: string;
  name: string;
  type: string;
  label: string;
}

const SignInForm: React.FC = () => {
  //states for managing error and input
  const [isLogin, setIsLogin] = useState(false);
  const [state, setState] = useState<LoginInitialState>(loginInitialState);
  const [formError, setFormError] =
    useState<LoginInitialState>(loginInitialState);

  //Storing data on change event
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLogin(false);
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    const newErrors = validation({
      [name]: value,
    });
    setFormError((errors) => ({ ...errors, [name]: newErrors[name] }));
  };

  //Submit function with validation
  const handleSignIn = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errors = validation({
      email: state?.email,
      password: state?.password,
    });
    setFormError(errors);

    if (!errors?.email && !errors?.password) {
      setIsLogin(true);
      setState(loginInitialState); //Clearing state after login
    }
  };

  //Layout
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
        {isLogin ? ( //Login Success message
          <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
            <div
              className="bg-blue-100 m-10 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
              role="alert"
            >
              <p>Login Successful</p>
            </div>

            <FormButton onclick={() => setIsLogin(false)} text="Logout" />
          </div>
        ) : (
          //main Login Form
          <div className="mx-auto max-w-md  py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-2 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                {logInAttributes?.map((attribute: Attribute) => {
                  const { id, name, type, label } = attribute;
                  return (
                    <div key={id} className="mt-10 relative">
                      <label
                        htmlFor={id}
                        className="block text-bg text-left font-medium leading-6 text-gray-900"
                      >
                        {label}
                      </label>
                      <div className="mt-2">
                        <input
                          id={id}
                          name={name}
                          type={type}
                          value={state?.[name]}
                          onChange={handleChange}
                          className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 ${formError?.[name] && "border-red-600"
                            }`}
                        />
                      </div>
                      <span className="text-sm font-medium dark:text-red-400 absolute top-full left-0 my:">
                        {formError?.[name]}
                      </span>
                    </div>
                  );
                })}
                <div>
                  <FormButton onclick={handleSignIn} text="Login" />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignInForm;

import React from 'react';
import {FieldError} from 'react-hook-form';
import "./UI-Input.css";

type UIInputProps = {
  label?: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number';
  register: any;  // From react-hook-form
  validation?: object;  // Validation rules from react-hook-form
  error?: FieldError | undefined;
  className?: string;
};

const UIInput: React.FC<UIInputProps> = ({
                                           label,
                                           name,
                                           type = 'text',
                                           register,
                                           validation = {},
                                           error,
                                           className = '',
                                         }) => {
  return (
    <>
      <div className={`relative input-field flex flex-col ${className}`}>
        <input
          id={name}
          type={type}
          placeholder={""}
          {...register(name, validation)}
          className={`w-full px-3 py-3 border-2 border-white border-opacity-20 text-white rounded-md focus:outline-none transition-colors duration-300 bg-primary_black`}
        />
        {label && (
          <label
            htmlFor={name}
            className={`absolute text-lg text-gray-500 left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 pointer-events-none bg-transparent px-1`}
          >
            {label}
          </label>
        )}
      </div>
      {error && <span className="text-red-500 text-lg mt-1.5">{error.message}</span>}

    </>
  );
};

export default UIInput;

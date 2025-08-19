import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => (
    <div>
        {label && <label>{label}</label>}
        <input {...props} />
    </div>
);

export default Input;
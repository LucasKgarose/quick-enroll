import React from 'react';

interface FormErrorProps {
    message?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
    if (!message) return null;
    return (
        <div style={{ color: 'red', fontSize: '0.9rem', marginTop: '4px' }}>
            {message}
        </div>
    );
};

export default FormError;
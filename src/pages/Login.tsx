import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login: React.FC = () => {

    return (
        <div className="max-w-md mx-auto px-4 py-12 bg-white rounded-lg shadow-md">
            username : lucas@quick-enroll.com
            password : @Test123
            <h2 className="text-2xl font-semibold mb-6 flex flex-col items-center">Login</h2>
            <LoginForm />
        </div>
    );
};

export default Login;
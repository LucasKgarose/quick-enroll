import React, { useState } from 'react';
import { useAuth } from '../../context/use-auth';
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'lucas@quick-enroll.com' && password === '@Test123') {
      login({ id: username, name: username });
      // Redirect to the intended page or home
      const redirectUrl = (location.state && location.state.from) || '/schools';
      navigate(redirectUrl, { replace: true });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      {error && <div className="text-red-600 text-sm text-center">{error}</div>}
      <div className="flex flex-col items-center gap-4 mt-4">
        <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-semibold text-lg shadow hover:from-gray-900 hover:to-gray-800 transition"
        >
            Login
        </button>
        <button
            type="button"
            onClick={() => {
                navigate("/register");
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 w-full"
        >
            No account? Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

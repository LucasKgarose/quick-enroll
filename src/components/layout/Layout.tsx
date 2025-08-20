import React from 'react';
import logo from '../../assets/quick-enroll-logo.png';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mx-auto max-w-6xl py-8 bg-white shadow-lg rounded-lg">
            <header className="flex items-center justify-between py-4 border-b border-gray-200 mb-8">
                <div className="flex items-center">
                    <a href="/">
                        <img src={logo} alt="Quick Enroll Logo" className="h-16 w-auto mr-4" />
                    </a>
                </div>
                <nav>
                    <a href="/schools" className="text-gray-700 hover:text-blue-600 font-medium mr-6">Schools</a>
                    <a href="/register" className="text-gray-700 hover:text-blue-600 font-medium mr-6">Register</a>
                    <a href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</a>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="mt-12 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Quick Enroll
            </footer>
        </div>
    );
};

export default Layout;
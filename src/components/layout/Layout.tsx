import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ margin: '0 auto', maxWidth: 1200, padding: '2rem' }}>
            <header>
                <h1>Quick Enroll</h1>
            </header>
            <main>{children}</main>
            <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
                &copy; {new Date().getFullYear()} Quick Enroll
            </footer>
        </div>
    );
};

export default Layout;
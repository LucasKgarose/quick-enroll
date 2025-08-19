import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Quick Enroll</span>
            <ul style={{ listStyle: 'none', display: 'inline', marginLeft: '2rem' }}>
                <li style={{ display: 'inline', marginRight: '1rem' }}>
                    <a href="/">Home</a>
                </li>
                <li style={{ display: 'inline', marginRight: '1rem' }}>
                    <a href="/courses">Courses</a>
                </li>
                <li style={{ display: 'inline' }}>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
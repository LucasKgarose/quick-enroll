import React from 'react';

const Apply: React.FC = () => {
    // Mock data for demonstration
    const mockApplications = [
        { id: 1, name: 'John Doe', status: 'Pending' },
        { id: 2, name: 'Jane Smith', status: 'Approved' },
        { id: 3, name: 'Alice Johnson', status: 'Rejected' },
    ];

    return (
        <div>
            <h1>Applications</h1>
            <ul>
                {mockApplications.map(app => (
                    <li key={app.id}>
                        {app.name} - <strong>{app.status}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Apply;
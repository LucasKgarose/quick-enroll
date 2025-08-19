import React from 'react';

const mockStatusData = [
    { id: 1, status: 'Enrolled', date: '2024-06-01' },
    { id: 2, status: 'Pending', date: '2024-06-02' },
    { id: 3, status: 'Rejected', date: '2024-06-03' },
];

const Status: React.FC = () => {
    return (
        <div>
            <h2>Status Page (Mock Data)</h2>
            <ul>
                {mockStatusData.map(item => (
                    <li key={item.id}>
                        <strong>{item.status}</strong> - {item.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Status;
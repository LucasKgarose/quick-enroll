import React from 'react';

const Home: React.FC = () => {
    // Mock data
    const mockCourses = [
        { id: 1, name: 'React Basics', enrolled: false },
        { id: 2, name: 'TypeScript Essentials', enrolled: true },
        { id: 3, name: 'Advanced CSS', enrolled: false },
    ];

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {mockCourses.map(course => (
                    <li key={course.id}>
                        {course.name} - {course.enrolled ? 'Enrolled' : 'Not Enrolled'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
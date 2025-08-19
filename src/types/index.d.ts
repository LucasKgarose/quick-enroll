export interface User {
    id: string;
    name: string;
    email: string;
    enrolledCourses: string[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    students: string[];
}

// Example mock data types
export type MockUser = User & { isMock: true };
export type MockCourse = Course & { isMock: true };
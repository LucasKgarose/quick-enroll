import React from 'react';

const mockStudentDetails = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 20,
    grade: 'Sophomore',
};

type StudentDetails = typeof mockStudentDetails;

interface StudentDetailsFormProps {
    initialValues?: StudentDetails;
    onSubmit?: (values: StudentDetails) => void;
}

export const StudentDetailsForm: React.FC<StudentDetailsFormProps> = ({
    initialValues = mockStudentDetails,
    onSubmit = (values) => { console.log('Submitted:', values); },
}) => {
    const [values, setValues] = React.useState<StudentDetails>(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Age:
                <input
                    name="age"
                    type="number"
                    value={values.age}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Grade:
                <input
                    name="grade"
                    value={values.grade}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};
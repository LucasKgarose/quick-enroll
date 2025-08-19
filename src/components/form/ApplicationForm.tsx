import React from 'react';

const ApplicationForm: React.FC = () => {
    // Mock state for form fields
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        course: '',
    });

    // Mock submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Submitted: ${JSON.stringify(form)}`);
    };

    // Mock change handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input name="name" value={form.name} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input name="email" value={form.email} onChange={handleChange} />
            </div>
            <div>
                <label>Course:</label>
                <select name="course" value={form.course} onChange={handleChange}>
                    <option value="">Select a course</option>
                    <option value="react">React</option>
                    <option value="typescript">TypeScript</option>
                </select>
            </div>
            <button type="submit">Apply</button>
        </form>
    );
};

export default ApplicationForm;
import React from 'react';

interface ParentContactFormProps {
    onSubmit: (data: ParentContactFormData) => void;
}

export interface ParentContactFormData {
    parentName: string;
    email: string;
    phone: string;
}

const mockInitialData: ParentContactFormData = {
    parentName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '555-123-4567',
};

export const ParentContactForm: React.FC<ParentContactFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = React.useState<ParentContactFormData>(mockInitialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Parent Name:
                <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};
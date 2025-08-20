import React from 'react';
import SchoolsGrid from '../components/common/SchoolsGrid';
import type { SchoolRow } from '../components/common/SchoolsGrid';

const mockSchools: SchoolRow[] = [
  {
    id: 1,
    name: 'Green Valley School',
    email: 'info@greenvalley.edu',
    address: '123 Green St, Valley City',
    phone: '555-1234',
    principal: 'Ms. Green'
  },
  {
    id: 2,
    name: 'Sunrise Academy',
    email: 'contact@sunriseacademy.org',
    address: '456 Sunrise Ave, Sun City',
    phone: '555-5678',
    principal: 'Mr. Sun'
  },
  {
    id: 3,
    name: 'Riverdale High',
    email: 'admin@riverdalehigh.com',
    address: '789 River Rd, Riverdale',
    phone: '555-9012',
    principal: 'Mrs. Dale'
  }
];

const Schools: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Schools</h1>
      <p className="text-lg text-gray-600 mb-8">
        List of available schools:
      </p>
      <SchoolsGrid data={mockSchools} />
    </div>
  );
};

export default Schools;

import React from 'react';
import SchoolsGrid from '../components/common/SchoolsGrid';
import type { SchoolRow } from '../components/common/SchoolsGrid';

const mockSchools: SchoolRow[] = [
  {
    id: 1,
    name: 'Skolo sa batxofe',
    email: 'info@batsofe-academy.edu',
    address: 'ga-Leputu, ga-Rampheri, Limpopo',
    phone: '076 o tla feleletsa',
    principal: 'Ms. Green'
  },
  {
    id: 2,
    name: 'Skolo sa Bana',
    email: 'contact@bana-skolo.org',
    address: 'ga-Mpja, ga-Rampheri, Limpopo',
    phone: '060 o tla feleletsa',
    principal: 'Mr. Sun'
  },
];

const Schools: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center bg-white rounded-lg shadow-md">
      <h1
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Schools
      </h1>
      <p
        className="text-lg text-gray-600 mb-8"
      >
        List of available schools:
      </p>
      <SchoolsGrid data={mockSchools} />
    </div>
  );
};

export default Schools;

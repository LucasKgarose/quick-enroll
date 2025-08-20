import React from "react";

export type SchoolRow = {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    principal: string;
};

export type DataTableColumn = { key: keyof SchoolRow; label: string };

export type DataTableProps = {
    data: SchoolRow[];
    columns: DataTableColumn[];
};

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, idx) => (
                    <tr key={row.id}>
                        {columns.map((col) => (
                            <td key={col.key} className="px-6 py-4 whitespace-nowrap">{row[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
import React from "react";
import DataTable from "../ui/DataTable";
import type { DataTableColumn, SchoolRow } from "../ui/DataTable";
import { useNavigate } from "react-router-dom";

const columns: DataTableColumn[] = [
    { key: "name", label: "Name" },
    { key: "address", label: "Address" },
    // @ts-expect-error: actions is not a key of SchoolRow, but we want to render custom cell
    { key: "actions", label: "Actions" },
];

const SchoolsGrid: React.FC<{ data: SchoolRow[] }> = ({ data }) => {
    const navigate = useNavigate();

    // Render actions for each row
    const renderActions = () => (
        <>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2">View</button>
            <button
                onClick={() => {
                  navigate("/apply");
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
                Apply
            </button>
        </>
    );

    // Prepare data for DataTable, including actions
    const tableData = data.map(row => ({
        ...row,
        actions: renderActions()
    }));

    return (
        <div className="overflow-x-auto rounded-lg shadow">
            <DataTable data={tableData} columns={columns} />
        </div>
    );
};

export default SchoolsGrid;
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  { field: 'agencyName', headerName: 'Stockist', width: 230,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  { field: 'description', headerName: 'Description', width: 430,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
    headerClassName:'text-lg text-bold font-sans font-bold text-gray-500',
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, description: 'Snow', agencyName: 'Jon', age: 35 },
  { id: 2, description: 'Lannister', agencyName: 'Cersei', age: 42 },
  { id: 3, description: 'Lannister', agencyName: 'Jaime', age: 45 },
  { id: 4, description: 'Stark', agencyName: 'Arya', age: 16 },
  { id: 5, description: 'Targaryen', agencyName: 'Daenerys', age: null },
  { id: 6, description: 'Melisandre', agencyName: null, age: 150 },
  { id: 7, description: 'Clifford', agencyName: 'Ferrara', age: 44 },
  { id: 8, description: 'Frances', agencyName: 'Rossini', age: 36 },
  { id: 9, description: 'Roxie', agencyName: 'Harvey', age: 65 },
];

export default function DataTable({ handleOpen, setFormData }) {

  const handleRowClick = (e) => {
    console.log(e.row)
    setFormData(e.row)
    handleOpen()
  }

  const getRowClassName = (params) => {
    return params.row.id%2 === 1 ? 'bg-blue-100 border-none' : ''; // Use Tailwind CSS utility classes
  };

  return (
    <div style={{ height: 400, width: '100%' }} className='bg-white rounded-2xl border-none border-white'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
        getRowClassName={getRowClassName}
      />
    </div>
  );
}

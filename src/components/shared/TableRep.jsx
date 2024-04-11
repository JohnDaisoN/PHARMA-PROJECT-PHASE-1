import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  // { field: '_id', headerName: 'ID', width: 100,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  { field: 'name', headerName: 'Representative', width: 430,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  { field: 'jobTitle', headerName: 'Job Title', width: 430,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  { field: 'supervisor', headerName: 'Supervisor', width: 230,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  // { field: 'doj', headerName: 'Date of Join', width: 430,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  // { field: 'dor', headerName: 'Date of Resign', width: 430,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 260,
//     headerClassName:'text-lg text-bold font-sans font-bold text-gray-500',
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
];


export default function DataTable({ handleOpen, setFormData, data }) {
  console.log(data)

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
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
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

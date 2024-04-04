import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 100,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  { field: 'name', headerName: 'Stockist', width: 230,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
  { field: 'desc', headerName: 'Description', width: 430,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500' },
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

// const rows = [
//   { id: 1, description: 'agency for Balaji', agencyName: 'Balaji', age: 35 },
//   { id: 2, description: 'agency for Elma', agencyName: 'Elma', age: 35 },
//   { id: 3, description: 'agency for Kanmoney', agencyName: 'Kanmoney', age: 35 },
//   { id: 4, description: 'agency for Us Pharma', agencyName: 'Us Pharma', age: 35 },
//   { id: 5, description: 'agency for Jayvi', agencyName: 'Jayvi', age: 35 },
//   { id: 6, description: 'agency for Hind', agencyName: 'Hind', age: 35 },
//   { id: 7, description: 'agency for Star', agencyName: 'Star', age: 35 },
//   { id: 8, description: 'agency for Mayon', agencyName: 'Mayon', age: 35 },
//   { id: 9, description: 'agency for Majestic', agencyName: 'Majestic', age: 35 },
//   { id: 10, description: 'agency for Sheen', agencyName: 'Sheen', age: 35 },
//   { id: 11, description: 'agency for Prabhu and Company', agencyName: 'Prabhu and Company', age: 35 },
  
// ];

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

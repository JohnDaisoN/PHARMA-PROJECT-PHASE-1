import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500'},
  { field: 'brandName', headerName: 'Brand', width: 230,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500'},
  { field: 'pts', headerName: 'PTS', width: 430,headerClassName:'text-lg text-bold font-sans font-bold text-gray-500'},
  /*{
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },*/
];

const rows = [
  { id: 1, brandName: 'ACIFOR-500 10s', division: 'MAIN', pack: '10X10 TAB', pts: '122.1428571', ptr: '135.7142857', mrp: '190'},
  { id: 2, brandName: 'ALPHARICH CAP 10s', division: 'MAIN', pack: '10X1X10 CAP', pts: '79.3220339', ptr: '88.13559322', mrp: '130'},
  { id: 3, brandName: 'AMEBEST 25 TAB 10s', division: 'SECOND', pack: '2X5X10 TAB', pts: '14.46428571', ptr: '16.07142857', mrp: '22.5'},
  { id: 4, brandName: 'AMEBEST 10 TAB 10s', division: 'SECOND', pack: '2X5X10 TAB', pts: '14.14285714', ptr: '15.71428571', mrp: '22'},
  { id: 5, brandName: 'ANTISEIZ 100 TAB', division: 'SECOND', pack: '10X10 TAB', pts: '61.07142857', ptr: '67.85714286', mrp: '95'},
  { id: 6, brandName: 'AMEBEST C TAB 10s', division: 'SECOND', pack: '2X5X10 TAB', pts: '18.64285714', ptr: '20.71428571', mrp: '29'},
  { id: 7, brandName: 'ASPIRO CAP 10s', division: 'SECOND', pack: '10X10 CAP', pts: '31.5', ptr: '35', mrp: '49'},
  { id: 8, brandName: 'AUGMOX DRY SYRUP 30ML', division: 'MAIN', pack: '30 ML BOTTLE', pts: '38.57142857', ptr: '42.85714286', mrp: '60' },
  { id: 9, brandName: 'BLACKRAL 40 TAB 10s', division: 'SECOND', pack: '10X10 TAB', pts: '16.07142857', ptr: '17.85714286', mrp: '25' },
  { id: 10, brandName: 'BLACKRAL 80 TAB 10s', division: 'SECOND', pack: '10X10 TAB', pts: '28.92857143', ptr: '32.14285714', mrp: '45' },
];

export default function DataTable({handleOpen,setFormData}) {

  const handleRowClick = (e)=>{
    console.log(e.row)
    setFormData(e.row)
    handleOpen()
  }


  const getRowClassName = (params) => {
    return params.row.id%2 === 1 ? 'bg-blue-100 border-none' : ''; // Use Tailwind CSS utility classes
  };

  return (
    <div style={{ height:400, width: '100%' }} className='bg-white rounded-2xl border-none border-white'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // onRowClick={handleOpen}
        onRowClick={handleRowClick}
        getRowClassName={getRowClassName}
      />
    </div>
  );
}
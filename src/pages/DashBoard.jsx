import React from 'react'
import DataTable from '../components/shared/TableAgency'
// import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
// import EnhancedTable from '../components/shared/TableAgency'
import BasicModal from '../components/PopupModel'

const DashBoard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [formData, setFormData] = React.useState({
    id:'',
    description:'',
    agencyName:'',
    age:'',
  });

  return (
    <div className = ' h-full w-full flex flex-col p-7'>
      <h1>STOCKIST</h1>
      <div className='flex justify-between items-center'>
        <div> search box with down menu</div>
        <div> add new agency</div>

      </div>
      <div> 
        <BasicModal open = {open} handleClose = {handleClose} formData = {formData}/>
        <DataTable handleOpen = {handleOpen} setFormData = {setFormData} />

      </div>

    </div>
  )
}

export default DashBoard
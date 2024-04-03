import React from 'react'
import DataTable from '../components/shared/TableAgency'
// import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
// import EnhancedTable from '../components/shared/TableAgency'
import BasicModal from '../components/PopupModel'
import Variants from '../components/skeletons/DashboardSkeleton'
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

  //data should be fetched from the server
  const data = 10;


  return (
    <div className = ' h-full w-full flex flex-col p-4 gap-3 '>
      {/* <div className='flex flex-col flex-wrap p-4 pt-3 bg-green-300 rounded-lg overflow-scroll'> */}
      {data?
       <div className='bg-white p-5 pb-7 flex flex-col gap-4 rounded-2xl drop-shadow-2xl mt-3'>
       <h1 className='text-3xl font-bold font-sans'>STOCKIST</h1>
       <div className='flex justify-between items-center'>
         <div> search box with down menu</div>
         <div> add new agency</div>
 
       </div>
       <div> 
         <BasicModal open = {open} handleClose = {handleClose} formData = {formData}/>
         <DataTable handleOpen = {handleOpen} setFormData = {setFormData} />
 
       </div>
       </div>
      :<Variants/>}
     
     </div>
  )
}

export default DashBoard
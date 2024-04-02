import React from 'react'
import BasicModal from '../components/ProductPopupModel'
import DataTable from '../components/shared/TableProduct';

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [formData, setFormData] = React.useState({
    id:'',
    brandName:'',
    division:'',
    pack:'',
    pts:'',
    ptr:'',
    mrp:'',
  });

  return (
    <div className = ' h-full w-full flex flex-col p-7'>
      <h1>PRODUCTS</h1>
      <div className='flex justify-between items-center'>
        <div> search box with down menu</div>
        <div> add new product</div>

      </div>
      <div> 
        <BasicModal open = {open} handleClose = {handleClose} formData = {formData}/>
        <DataTable handleOpen = {handleOpen} setFormData = {setFormData} />

      </div>

    </div>
  )
}

export default Products
import React, { useState, useEffect } from 'react';
import BasicModal from '../components/ProductPopupModel'
import DataTable from '../components/shared/TableProduct';
import Variants from '../components/skeletons/ProductSkeleton';
import { Button } from '@mui/material'

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

  //data should be fetched from the server
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products/list?page=1&limit=20',{method:'GET'});
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount


  return (
    <div className = ' h-full w-full flex flex-col p-7'>
      {/* <div className='flex flex-col flex-wrap p-4 pt-3 bg-green-300 rounded-lg overflow-scroll'> */}
      {data? (
       <div className='bg-white p-5 pb-7 flex flex-col gap-4 rounded-2xl drop-shadow-2xl mt-1'>
       <h1 className='text-3xl font-bold font-sans'>PRODUCTS</h1>
       <div className='flex justify-between items-center'>
         <div> search box with down menu</div>

         
          {/* <Form fetchData={fetchData} /> */}
        <div className='flex justify-between'>
          <Button variant="contained" color="primary">Add</Button>
          
        </div>
       </div>
       <div> 
         <BasicModal open = {open} handleClose = {handleClose} formData = {formData} fetchData = {fetchData}/>
         <DataTable handleOpen = {handleOpen} setFormData = {setFormData} data = {data.data}/>
 
       </div>
       </div>
    )  :(
      <Variants/>
    )}

    </div>
  );
};

export default Products;
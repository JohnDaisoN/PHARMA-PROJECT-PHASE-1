import React, { useState, useEffect } from 'react';
import DataTable from '../components/shared/TableAgency';
import BasicModal from '../components/PopupModel';
import Variants from '../components/skeletons/DashboardSkeleton';

const DashBoard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [formData, setFormData] = useState({
    _id:'',
    desc:'',
    name:'',
    age:'',
  });

  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/agencies/list?page=1&limit=5',{method:'GET'});
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
    <div className='h-full w-full flex flex-col p-4 gap-3'>
      {data ? (
        <div className='bg-white p-5 pb-7 flex flex-col gap-4 rounded-2xl drop-shadow-2xl mt-3'>
          <h1 className='text-3xl font-bold font-sans'>STOCKIST</h1>
          <div className='flex justify-between items-center'>
            <div>search box with down menu</div>
            <div>add new agency</div>
          </div>
          <div> 
            <BasicModal open={open} handleClose={handleClose} formData={formData} fetchData = {fetchData}/>
            <DataTable handleOpen={handleOpen} setFormData={setFormData} data = {data.data} />
          </div>
        </div>
      ) : (
        <Variants />
      )}
    </div>
  );
};

export default DashBoard;

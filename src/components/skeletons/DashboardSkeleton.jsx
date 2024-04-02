import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1} className='mt-8 p-6 bg-white rounded-lg'>
      {/* For variant="text", adjust the height via font-size */}
      {/* <Skeleton variant="text" width={200} sx={{ fontSize: '2rem' }}></Skeleton> */
      <h1 className='text-3xl font-bold font-sans'>STOCKIST</h1>}
      {/* For other variants, adjust the size with `width` and `height` */}
      <div className='flex justify-between'>

      <Skeleton variant="rounded" width={210} height={30}/>
      <Skeleton variant="rounded" width={210} height={30}/>
      </div>

      <Skeleton variant="rounded"  height={60}  />
      <Skeleton variant="rounded"  height={300}  />
    </Stack>
  );
}
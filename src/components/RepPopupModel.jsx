import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Form from './RepPopupForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid grey-400',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  fontFamily: 'Arial, sans-serif',
};

export default function BasicModal({open,handleClose,formData,fetchData}) {
 
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form  formData = {formData} fetchData = {fetchData}/>
        </Box>
      </Modal>
    </div>
  );
}

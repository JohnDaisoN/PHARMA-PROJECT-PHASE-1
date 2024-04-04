import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from './PopupForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  width:400,
  boxShadow: 24,
};

export default function BasicModal({open,handleClose,formData,fetchData}) {
  // console.log(formData)
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

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
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            {formData.agencyName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formData.description}
          </Typography> */}
          <Form  formData = {formData} fetchData = {fetchData}/>
        </Box>
      </Modal>
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal({open,handleClose,formData}) {
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            BRAND :{formData.brandName}
          </Typography>
          <Typography id="modal-modal-division" sx={{ mt: 2 }}>
            DIVISION :{formData.division}
          </Typography>
          <Typography id="modal-modal-pts" sx={{ mt: 2 }}>
            PTS :{formData.pts}
          </Typography>
          <Typography id="modal-modal-ptr" sx={{ mt: 2 }}>
            PTR :{formData.ptr}
          </Typography>
          <Typography id="modal-modal-mrp" sx={{ mt: 2 }}>
            MRP :{formData.mrp}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

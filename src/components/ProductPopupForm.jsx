import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';


const Form = ({formData, fetchData}) => {
    console.log(formData)
  const [data, setData] = useState({
    brandName: formData.brandName,
    pts: formData.pts,
    id: formData._id,
    division: formData.division,
    pack: formData.pack,
    ptr: formData.ptr,
    mrp: formData.mrp,
    createdOn: formData.createdOn,
    modifiedOn: formData.modifiedOn
  });
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/products/${data.id}`, {
        method: 'PUT', // or 'POST' if applicable
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Form data submitted successfully');
      setEditMode(false);
        fetchData();
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');

  if (!confirmed) {
    return; // If user cancels, do not proceed with deletion
  }
    try {
      // Make a DELETE request to your API endpoint
      const response = await fetch(`http://localhost:3000/products/${data.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed, such as authorization headers
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
  
      // If the deletion was successful, update the state to remove the deleted item
      setData(prevState => {
        const { [id]: deletedItem, ...rest } = prevState;
        return rest;
      });
  
      // Optionally, show a success message or perform other actions
      console.log('Item deleted successfully');
      fetchData();
    } 
    
    catch (error) {
      console.error('Error deleting item:', error.message);
      // Handle error scenarios, such as showing an error message to the user
    }
  };
  

  return (
    <Grid container justifyContent="center" className=''>
      <Grid item>
        <Paper elevation={3} style={{ padding: '20px', maxHeight: '70vh', overflowY: 'auto' }} >
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Brand Name"
                id="brandName"
                name="brandName"
                value={data.brandName}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Division"
                id="division"
                name="division"
                value={data.division}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Pack"
                id="pack"
                name="pack"
                value={data.pack}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="PTS"
                id="pts"
                name="pts"
                value={data.pts}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="PTR"
                id="ptr"
                name="ptr"
                value={data.ptr}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="MRP"
                id="mrp"
                name="mrp"
                value={data.mrp}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Created On"
                id="createdOn"
                name="createdOn"
                value={data.createdOn}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Modified On"
                id="modifiedOn"
                name="modifiedOn"
                value={data.modifiedOn}
                onChange={handleChange}
                required
              />
           
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          ) : (
            <div>
              <TextField
                fullWidth
                margin="normal"
                label="Brand Name"
                value={data.brandName}
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Division"
                value={data.division}
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Pack"
                value={data.pack}
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="PTS"
                value={data.pts}
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="PTR"
                value={data.ptr}
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="MRP"
                value={data.mrp}
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Created On"
                value={data.createdOn}
                InputProps={{ readOnly: true }}
              />
              <TextField
              fullWidth
              margin="normal"
              label="Modified On"
              value={data.modifiedOn}
              InputProps={{ readOnly: true }}
            />
              
              <div className='flex justify-between'>
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="contained" color="primary" onClick={handleDelete}>
                Delete
              </Button>
              </div>
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Form;

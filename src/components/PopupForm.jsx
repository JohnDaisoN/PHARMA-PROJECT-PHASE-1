import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';

const Form = ({formData, fetchData}) => {
    console.log(formData)
  const [data, setData] = useState({
    name: formData.name,
    desc: formData.desc,
    id: formData._id
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
      const response = await fetch(`http://localhost:3000/agencies/${data.id}`, {
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

  return (
    <Grid container justifyContent="center" className=''>
      <Grid item>
        <Paper elevation={3} style={{ padding: '20px' }} >
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Stockist Name"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Description"
                id="desc"
                name="desc"
                value={data.desc}
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
                label="Stockist Name"
                value={data.name}
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Description"
                value={data.desc}
                InputProps={{ readOnly: true }}
              />
              
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Form;

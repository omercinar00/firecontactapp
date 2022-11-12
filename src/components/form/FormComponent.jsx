 import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
 import { Box, Stack } from '@mui/system'
 import React from 'react'


 const FormComponent = ({info,setInfo,handleFormSubmit}) => {
  const handleChange=(e)=>{
    e.preventDefault();
    // const name=e.target.name 
    // const value=e.target.value 
    const {name,value}=e.target
    console.log(name,value)
    setInfo({...info,[name]:value})
  }
  return (
    <Grid>
      <div>
        <h2>
          <span>
            <a href="https://www.linkedin.com/in/omercinarr00/">
              <code>{"<Anka/>"}</code>
            </a>
          </span>{" "}
          Design
        </h2>
      </div>
      <div>
        <h1>Add Contact</h1>
      </div>
      <Box>
        <form onSubmit={handleFormSubmit}>
          <Stack>
            <TextField
              variant="outlined"
              name="username"
              placeholder="Name"
              onChange={handleChange}
              value={info.username}
            />
            <TextField
              variant="outlined"
              type="tel"
              name="phoneNumber"
              placeholder="+90 555 123 1234"
              onChange={handleChange}
              value={info.phoneNumber}
            />
            <Select
              label="Gender"
              name="gender"
              variant="outlined"
              value={info.gender}
              onChange={handleChange}
            >
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <Button type="submit" value="Submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
 }

 export default FormComponent;

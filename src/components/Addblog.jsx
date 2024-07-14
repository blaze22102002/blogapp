import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

function Addblog() {
  const cardStyle = {
    backgroundColor: '#FDEE00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    margin: 'auto', 
    marginTop: 100,
    maxWidth: 350, 
  };

  const contentStyle = {
    textAlign: 'center',
  };

  const formContainerStyle = {
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
  };

  return (
    <Card style={cardStyle}>
      <CardContent style={contentStyle}>

        <div style={formContainerStyle}>
          <Typography variant='h3'>Add Your Blog</Typography>
          <br /><br />
                  <TextField fullWidth variant='outlined' label='Blog Name'/>
          <br /><br />
          <TextField fullWidth variant='outlined' label='Description'/>
          <br /><br />
          <TextField fullWidth variant='outlined' label='Author Name'/>
          <br /><br />
          <Button fullWidth variant='contained' color='primary'>Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Addblog;

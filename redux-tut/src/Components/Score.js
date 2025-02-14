import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { deleteForm } from '../Services/Actions/actions';
// import {Card, CardActionArea,CardMedia,CardContent,Typography} from '@mui/material'
function Score() {
  const formDataArray = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteForm(index))
  }

  return (
    <div className="scrollable-container">
      {formDataArray.length === 0 ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
          <Typography variant="h4" component="div" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px', fontSize: '24px', color: 'black' }}>
            No Players Added Yet
          </Typography>
          <Typography variant="body1" component="div" style={{ textAlign: 'center', fontSize: '18px', color: 'gray' }}>
            Please add players to see their scores.
          </Typography>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" flexWrap="wrap" alignItems="center"  flexDirection="row" width="100%" overflow-y="auto">
          {formDataArray.map((formData, index) => (
            <Card key={index} sx={{ width: 400, height: 270, border: '2px solid black', borderRadius: '8px', margin:'19px 20px' }}>
              <CardContent style={{ backgroundColor:"rgba(0, 0, 0, 0.8"}}>
                <Typography variant="h5" component="div" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px', fontSize: '27px', color: 'white', textDecoration: 'underline', backgroundColor: 'rgba(0, 0, 0, 0.74)', padding: '10px', borderRadius: '8px', border: '2px solid black' }}>
                  Player Score
                </Typography>
                <Typography sx={{ mb: 1.5 }}  style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px', color: 'white', marginBottom: '17px', marginTop: '17px', textTransform:'capitalize',letterSpacing:'1px' }}>
                  Name: {formData.name}
                </Typography>
                <Typography variant="body2" color="white" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: 'white', marginBottom: '17px', marginTop: '17px' ,textTransform:'capitalize',letterSpacing:'1px'}}>
                  Score: {formData.score}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleDelete(index)} style={{ marginTop: '-20px', background:'brown' }}>
                Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
  )
}
</div>)
}

export default Score;





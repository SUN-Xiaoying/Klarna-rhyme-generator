import logo from './logo.svg';
import './App.scss';

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import products from "./products-mock.json"
import { useNavigate } from 'react-router-dom';

export default function PickProductPage() {

  //style = {{ marginLeft: 35, marginTop : 100 }}
  const navigate = useNavigate();
  const handleClick = (product) => {
    navigate("/rhyme", {state: {product}})
  }
  return (
    <>
    <div className="PickProduct" style={{overflow: "hidden"}}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160} justifyContent="center" alignItems="center" >
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {products.map(product => (
            <>
            <ListItem alignItems="flex-start" onClick={() => handleClick(product)}>
              <ListItemAvatar sx={{ padding: "2vw"}}>
             
              <Avatar alt="Remy Sharp" src={product.image} sx={{ width: 100, height: 100 }}/>
             
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {product.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            </>
        ))}
        </List>
      </Grid>
      </Box>

    </div>
    </>
  );
};
import logo from './logo.svg';
import './PickProduct.css';

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { yellow, grey } from '@mui/material/colors';

const products = [
    {
        title: "Smoooth Dogg Ring",
        description: "Description 1",
        price: 420,
        image: "https://cached-images.bonnier.news/gcs/di-bilder-prod/media/060ee407cbe18b958146d70a6ea08d79.jpg?output-quality=80&output-format=auto&resize=1919px%3A959px&crop=1920px%3A960px%3Bcenter%2Ccenter",
    },
    {
        title: "Lipstick x Lady Gaga",
        description: "Description 1",
        price: 29,
        image: "https://www.klarna.com/assets/sites/15/2020/02/14152140/GetWhatYouLove_Gaga_FBtopbanner_1280x720.jpg",
    },
    {
        title: "Robe x A$AP Rocky",
        description: "Description 1",
        price: 709,
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fuser-863883135%2Faap-rocky-fill-my-cup-klarna-snippet&psig=AOvVaw3IBZM5HV61eOawHou9FumH&ust=1670496808751000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCO5aes5_sCFQAAAAAdAAAAABAI",
    },
];

const response = {
  "id":"cmpl-6Kl6JBM7576Vi0VaSYc5Se4DpesUi",
  "object":"text_completion",
  "created":1670405635,
  "model":"text-davinci-003",
  "choices":[
    {
      "text":"\n\nBooks are so cool, they come with hooks\nTo read them is a pleasure, no need to look\nFrom fiction to non-fiction, they're all around\nTo learn and explore, they can be found","index":0,"logprobs":null,"finish_reason":"stop"
    }
  ],
  "usage":{
    "prompt_tokens":8,
    "completion_tokens":45,
    "total_tokens":53
  }
}

console.log(response.choices[0].text)

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 'auto',
  lineHeight: '20px',
  padding: 20
}));

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

function PickProduct() {
  const [input, setInput] = useState();

  const handleSubmit = () => {
    // send to ChatGPT
    console.log("Input is:", input)
  }
  //style = {{ marginLeft: 35, marginTop : 100 }}
  return (
    <div className="PickProduct" style={{overflow: "hidden"}}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160} justifyContent="center" alignItems="center" >
        { products.map(product => (
            <Box
                sx={{
                    p: 2,
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 2,
                }}
                >
                <img 
                    src={product.image} 
                    style={{ height: 100, width: 100}}  
                    />
            </Box>
        ))}
      </Grid>
      </Box>
      
    </div>
  );
}

export default PickProduct;

import logo from './logo.svg';
import './App.scss';

import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { getResponse } from './open-gpt-api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
import Lights from './Lights'
import presentsSpinner from './present_loading.gif'
import { TextField } from '@mui/material';


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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'auto',
    lineHeight: '20px',
    padding: 10
  }));

  function NewlineText(props) {
    const text = props.text
    return text.split('\n').map(str => <p>{str}</p>);
  }

export function ExtraPage(){
    const navigate = useNavigate();
    const { state } = useLocation();

    // CHeck that state exists
    const [input, setInput] = useState();
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);
    const [rhymeStyle, setRhymeStyle] = useState("mentioning Klarna");


    const handleSubmit = async () => {
      // send to ChatGPT
      setOutput("")
      setLoading(true)
      const res = await getResponse(input)
      setLoading(false)
      setOutput(res.text)
      console.log("Input is:", input)
      console.log("Rhyme is:", res)
    }

    return (
      <React.Fragment>
        <Lights />
        <img src="/images/logo.png" className="rounded mx-auto d-block" style={{ height: 150, marginTop : 30, marginBottom:30 }}/>
        
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Grid container spacing={2} minHeight={160} justifyContent="center" alignItems="center" >
            <Box sx={{ display: 'grid' }}>
            <Stack spacing={2} direction="column">
                {loading ?
                (
                  <div class="present-spinner-box">
                    <Typography variant="body1" color="white">Generating rhyme..</Typography>
                    <img class="present-spinner" src={presentsSpinner} alt="Present Loading" />
                  </div>
                )
                :
                <>
                <TextField id="outlined-basic" label="Prompt..." variant="standard" onChange={(event) => setInput(event.target.value)}/>
                <Button sx={{ backgroundColor: pink[150], color: "white", fontWeight: 'bold', border: 1.5 }} variant="outlined"  onClick={handleSubmit}>Create Rhyme</Button>
                </> 
                }
            </Stack>
            </Box>

            </Grid>
            {output !== "" &&
            <Box
                sx={{
                    p: 2,
                    maxWidth: 345
                }}
            >
                <Item key={1} elevation={4}>
                    <NewlineText key={1} text={output} />
                </Item>
            </Box>}
        </Box>
        </React.Fragment>
    )
}
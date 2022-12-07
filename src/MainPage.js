
import './App.css';

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
import presentsSpinner from './present_loading.gif'


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


export function MainPage(){
    const navigate = useNavigate();
    const { state } = useLocation();
     // eslint-disable-next-line max-len
    useEffect(() => {
        if(navigate){
            if (!(state && state.product)) {
                console.log("Redirecting back")
                navigate("/");
            }
        }
        console.log("state:", state)
        // eslint-disable-next-line
    }, [navigate])

    // CHeck that state exists
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);
    const [rhymeStyle, setRhymeStyle] = useState("mentioning Klarna");


    const handleSubmit = async () => {
      // send to ChatGPT
      setOutput("")
      setLoading(true)
      const res = await getResponse('Write a rhyme about ' + state.product.tag + rhymeStyle + " not mentioning " +  state.product.tag)
      setLoading(false)
      setOutput(res.text)
    }

    return (
      <React.Fragment>
        <img src="/images/logo.png" alt='klarna-logo' className="rounded mx-auto d-block" style={{ height: 150, marginTop : 30, marginBottom:30 }}/>
        <Box
            sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
            }}
            >
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={state && state.product && state.product.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {state && state.product && state.product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {state && state.product && state.product.description}
                </Typography>
            </CardContent>
            </Card>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Grid container spacing={2} minHeight={160} justifyContent="center" alignItems="center" >
            <Box sx={{ display: 'grid' }}>
            <Stack spacing={2} direction="column">
                {/* <TextField id="outlined-basic" label="Outlined" variant="standard" onChange={(event) => setInput(event.target.value)}/> */}
                
                {loading ?
                (
                  <div class="present-spinner-box">
                    <Typography variant="body1" color="white">Generating rhyme..</Typography>
                    <img class="present-spinner" src={presentsSpinner} alt="Present Loading" />
                  </div>
                )
                :
                <>
                <ButtonGroup>
                <Button style={{
                  backgroundColor: rhymeStyle.includes("Klarna") ? 'antiquewhite' : '#ffc0cb',
                }} onClick={() => setRhymeStyle(" mentioning Klarna")}>Klarna</Button>
                <Button style={{
                  backgroundColor: rhymeStyle.includes("child") ? 'antiquewhite' : '#ffc0cb',
                }} onClick={() => setRhymeStyle(" in the style of a child")}>child</Button>
                <Button style={{
                  backgroundColor: rhymeStyle.includes("gangster") ? 'antiquewhite' : '#ffc0cb',
                }} onClick={() => setRhymeStyle(" in the style of a gangster rapper")}>gangster rap</Button>
              </ButtonGroup>
                  <Button sx={{ backgroundColor: pink[150], color: "white", fontWeight: 'bold', border: 1.5 }} variant="outlined"  onClick={handleSubmit}>Create Rhyme</Button>
                  </> }
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
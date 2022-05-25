import React from "react";
import { Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";
import { theme } from "./theme";

const UiTutorial = () =>{

    const BlueButton = styled(Button)({
        // const BlueButton = styled(Button)(({theme})=>({
          backgroundColor:"skyblue",
          // backgroundColor:theme.palette.otherColor.main,
              color:"#888",
              margin:5,
              "&:hover":{
                backgroundColor:"lightblue"
              },
              "&:disabeled":{
                backgroundColor:"gray",
                color:"white"
              }
        })
    return(
        <>
        <Button variant="text">Text</Button>
     <Button startIcon={<Settings/>} variant="contained" color="secondary">Settings</Button>
      <Button startIcon={<Add/>} variant="contained" color="success">Add Post</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag 
      </Typography>
      <BlueButton>My Unique Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
      </>
    );
}
export default UiTutorial;
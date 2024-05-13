import React, { Component } from "react";
import { Box, Input, ThemeProvider, createTheme,Button } from "@mui/material";

// Create a custom theme
const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          "&.MuiInput-root": {
            borderBottom: "none" // Disable bottom line for all Input components
          }
        }
      }
    }
  }
});

export class Inputs extends Component {
  render() {
    const commonInputStyle = { borderRadius: '10px', background: '#87A3C3',padding:'5px',fontSize:'15px' };
    const Time = { ...commonInputStyle, width: '120px' };
    const Date = { ...commonInputStyle, width: '250px' };
    const Search = { ...commonInputStyle, width: '400px' };
    const AddItem = { ...commonInputStyle, width: '650px' };

    return (
      <ThemeProvider theme={theme}> {/* Apply custom theme */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row',
          gap:'10px', width:'95%',padding:'10px',height:'100%' }}>
          <Input sx={Date} disableUnderline>hello</Input> {/* Use disableUnderline prop */}
          <Input sx={Time} disableUnderline>hello</Input> {/* Use disableUnderline prop */}
          <Input sx={Search} disableUnderline>hello</Input> {/* Use disableUnderline prop */}
          <Button><img src="./Search.png" alt="Search" /></Button>
          <Input sx={AddItem}>hello</Input>
          <Button sx={{borderRadius:'8px', width:'200px',color:'#ffffff',
          background: 'linear-gradient(90deg, rgba(23,47,94,1) 12%, rgba(78,121,173,1) 100%)'}}
          >Add Item</Button>
        </Box>
      </ThemeProvider>
    );
  }
}


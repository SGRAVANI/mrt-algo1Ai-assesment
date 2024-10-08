import React from 'react'
import SliderCompo from './SliderCompo'
import { Box,Typography } from '@mui/material'

/**
 * Component to Mui slider and table heading in table head of MRT Table.
 *
 * @component
 * @param {Array} props.stockData - Array of stock data to display in the table.
 * @param {Function} props.handleSliderChange - Function to  sort and filter the stock data based on the slider value.
 
 * @returns {JSX.Element} renders MUI slider along with table heading.
 */


function TableHeaderSlider({handleSliderChange,stockData}) {
  console.log("slider rendered in table")
    return (

 
 <div style={{display:"flex",
         flexDirection:"column",
         alignItems:"start",
         justifyContent:"center",
         gap:"1.5rem",
         marginBottom:"0.2rem",
      }}>
       
       <SliderCompo handleSliderChange={handleSliderChange} stockData={stockData} />
      
       <Box sx={{display:"flex", justifyContent:"start",alignItems:"center"}}>
      
             <Typography variant="h5" component='h4' sx={{fontWeight:"500",fontFamily:`ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"`,color:"rgb(2,8,23)"}}>
         Apple Inc.  (AAPL) &nbsp; 
          </Typography>

            <Typography variant="h5" component="h6" sx={{fontWeight:"bold",fontSize:"1.4rem"}} ><span sx={{color:"black",fontWeight:"bold"}}>$214.29</span> <span style={{color:"rgb(150,33,33"}}>($  &nbsp; -2.38) &nbsp;  -1.1% </span>
            </Typography>
        </Box>
</div>


 
  )
}

export default React.memo(TableHeaderSlider)
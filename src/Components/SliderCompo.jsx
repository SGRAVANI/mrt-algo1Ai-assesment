import React from 'react'
import {Box,Slider} from "@mui/material"
import theme from "../theme.jsx"


/**
 * Component to render Mui slider.
 *
 * The slider is used to filter and sort the data displayed in the table based on the selected value.
 *
 * @component
 * @param {Array} props.stockData - Array of stock data to display in the table.
 * @param {Function} props.handleSliderChange - Function to  sort and filter the stock data based on the slider value.
 
 * @returns {JSX.Element} renders MUI slider in MRT Table.
 */

function SliderCompo({handleSliderChange,stockData}) {
  console.log("slider compo rendered")
  return (
    <>
    <div>
    <h4 style={{marginBottom:"0.25rem",marginTop:"0.2rem"}}>Filter Results</h4>
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"start",gap:"0.8rem"}}>
        <div  >0</div>
        <Slider
  aria-label="rows"
  defaultValue={10}
  valueLabelDisplay="auto"
  step={1}
  min={0}
  max={stockData.length}
  onChangeCommitted={
    handleSliderChange
  }

  sx={{width:"120px",color:`${theme.palette.primary.main}`,
    height:"8px",

  }} 
  
/>
        <div  >{stockData.length}</div>
      </Box>
      </div>
    </>
  )
}

export default React.memo(SliderCompo);
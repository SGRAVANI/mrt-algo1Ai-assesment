// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Typography,ThemeProvider,createTheme,Slider } from '@mui/material'
// import theme from './theme.jsx'
// import { MaterialReactTable ,useMaterialReactTable} from 'material-react-table'
// //import { darken, lighten, useTheme } from '@mui/material';
// function App() {
//   const columns=[{
//    accessorKey:"name",
//    header:"name"
//   },
// {
// accessorKey:"address",
//    header:"address"
// },
// {
// accessorKey:"age",
//    header:"age"
// },
// {
// accessorKey:"dob",
//    header:"dob"
// }]
// let data=[
//   {name:"shaku",
//     address:"surat",
//     age:"37",
//     dob:"1/1/2000"
//   },
//   {name:"shaku",
//     address:"surat",
//     age:"37",
//     dob:"1/1/2000"
//   },
//   {name:"shaku",
//     address:"surat",
//     age:"37",
//     dob:"1/1/2000"
//   },{name:"shaku",
//     address:"surat",
//     age:"37",
//     dob:"1/1/2000"
//   }

// ]
// //const theme = useTheme();
// const baseBackgroundColor ='rgba(3, 44, 43, 1)'

// // theme.palette.mode === 'dark'
// //   ? 'rgba(3, 44, 43, 1)'
// //   : 'rgba(244, 255, 233, 1)';

// let table=useMaterialReactTable({
//   columns,
//   data,
//   enablePagination:false,
//   muiTablePaperProps: {
//     elevation: 0, //change the mui box shadow
//     //customize paper styles
//     sx: {
//       borderRadius: '2',
//       border: '1px solid #e0e0e0',
//     },
//   },
 
//   // muiTableBodyCellProps: {
//   //   sx: {
//   //     borderRight: '2px solid #e0e0e0', //add a border between columns
//   //     fontFamily: "monospace !important",
//   //     fontWeight:" 600 !important",
//   //    // display: "flex",
//   //     textAlign:"end !important",
//   //   },
//   // },

//   // muiTableBodyProps: {
//   //   sx: (theme) => ({
     

//   //     '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]) > td':
//   //       {
//   // //        backgroundColor: darken(baseBackgroundColor, 0.1),
//   //       },
//   //     '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
//   //       {
//   //   //      backgroundColor: darken(baseBackgroundColor, 0.2),
//   //       },
//   //     '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]) > td':
//   //       {
//   //     //    backgroundColor: lighten(baseBackgroundColor, 0.1),
//   //       },
//   //     '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
//   //       {
//   //       //  backgroundColor: darken(baseBackgroundColor, 0.2),
//   //       },
//   //   }),
//   // },
//   // renderEmptyRowsFallback: ({ table }) => (
//   //   <span>Customized No Rows Overlay</span>
//   // ),
//   // muiTableBodyProps: {
//   //   sx: {
//   //     //stripe the rows, make odd rows a darker color
//   //     '& tr:nth-of-type(even) > td': {
//   //       backgroundColor: '#f5f5f5',
//   //     },
  
//   //       p: '2px 16px'
      
//   //   },
//   // },
//   // initialState:{
//   //    showColumnFilters:true
//   // },
//   muiTableHeadCellProps: {
//     //no useTheme hook needed, just use the `sx` prop with the theme callback
//     sx: (theme) => ({
//       // color:"white",
//       backgroundColor:"rgb(15, 23, 42) !important",
//       // '& .Mui-TableHeadCell-Content': {
//       //   padding: '0',
//       //   color:"white !important",
//       //   opacity:"1 !important"
//       // },

//     //   '& .css-1gc6k8m':{
//     //     color:"white !important",
//     //   },
//     //   '& .MuiButtonBase-root svg':{
//     //  color:"white !important",
//     //  opacity:"1 important"
//     //   },
//     //   // '& .MuiSvgIcon-root':{
//     //   //   color:"white",
//     //   //   opacity:"1 !important" ,
//     //   // },
      
//     //   //use the `&` syntax to target hover state
//     //   '&:hover': {
//     //     fontWeight: 'bold',
//     //   },
//     //   '& .MuiInputBase-root':{
//     //     borderBottom:"1px solid white", 
//     //     color:"white !important"
//     //   }

//     }),
//   },
//   // enableDensityToggle:false,
//   // initialState:{
//   //    density:"compact"
//   // },
//   // muiTableBodyRowProps:{
//   //   sx: {
//   //     height: '10px !important'
//   //   }
//  // },
//   // mrtTheme: (theme) => ({
//   //   baseBackgroundColor: baseBackgroundColor,
//   //   draggingBorderColor: theme.palette.secondary.main,
//   // }),
//   muiTableBodyCellProps:{
//     sx: {
//       p: '2px 16px'
//     }
//   }, 
  
//   muiTableBodyRowProps:{
//     sx: {
//       height: '30px'
//     }
// },

// muiTableHeadCellProps:({
//   column
// }) => ({
//   sx: {
//     background:`${theme.palette.primary.main} `,
//     '& .MuiTableSortLabel-root svg': {
//       color: `${theme.palette.primary.contrastText} !important` ,
//       opacity:"1 !important"
//     },
    
//   }
// })

// })
//   return (
//     <>
//       <div>
//         <ThemeProvider theme={theme} >
//         <header>

//           <Typography variant='h1' component="h2" bgcolor="primary.main" padding={10} color="primary.contrastText" >Hellow word</Typography>
//         </header>
//         <Slider sx={{marginTop:"3rem"}}  valueLabelDisplay='auto'/>
//         <MaterialReactTable table={table}
        
        
//         />
//         </ThemeProvider>
//       </div>
//     </>
//   )
// }

// export default App
import "./App.css"
import React from 'react'
import StockDataTable from './Components/StockDataTable'
import theme from "./theme"
import { ThemeProvider } from '@mui/material'
function App() {
  return (

    <>
    <ThemeProvider theme={theme}>
    <StockDataTable/>
    </ThemeProvider>
    </>
  )
}

export default App
import theme from "../theme";

//style for muiTableHeadCellProps
let headerCellStyle={
    // borderBottom: '1px solid #b7b7b7',
   
    fontSize:"14px",
   textAlign:"center",
  verticalAlign:"bottom",
  paddingBottom:"0.3rem",
  
  width:"95px !important",
  maxWidth:"105px",
  boxSizing:"border-box",
  
  '& .css-1w86f15':{
  justifyContent:"space-between",
  height:"100%",
  paddingBottom: "1rem !important",
  },
  
  
  background:`${theme.palette.primary.main} `,
  '& .MuiTableSortLabel-root svg': {
    color: `${theme.palette.primary.contrastText} !important` ,
    opacity:"1 !important"
  },
  
  '& .MuiSvgIcon-root':{
    color:"primary.contrastText"
  },
  
   
  };
  //style for muiTableRowllCellProps
  const commonTableRowCellStyle={
      color:"black",
  
          padding: '2px 8px',   
          borderLeft: '1px  solid #b7b7b7',
          textAlign:"right",
            fontWeight:"600",
          
            fontFamily: "monospace !important",
  }

  //custom styles for input filter 
const textFilterStyle={
 
  
         '& .MuiInputBase-input': {
          fontSize: '1rem',            // Change font size of input text
          color: "white", 
         
        },
           

        '& .css-jfiwu8-MuiInputBase-root-MuiInput-root:after': {
            // borderBottom: " 2px solid #1976d2;",
            // width:"90%",
            // transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            
        },
}
 export {headerCellStyle,commonTableRowCellStyle,textFilterStyle} ;
import { Container } from "@mui/material";
import { useMemo, useState, useEffect, useCallback } from "react";
import { MaterialReactTable, useMaterialReactTable ,MRT_ToggleFiltersButton} from "material-react-table";
import theme from "../theme";
import { useRef } from "react";
import TableHeaderSlider from "./TableHeaderSlider.jsx";
import {headerCellStyle,commonTableRowCellStyle,textFilterStyle} from "../utility/customStyleObjects.jsx"
import useFetchStockData from "./CustomHooks/useFetchStockData.js";
import useSliderData from "./CustomHooks/useSliderData.js";
import { formatNumber } from "../utility/util.jsx";

/**
 * that is dynamically populated with stock data fetched from an external API. It also includes a slider that allows users to filter and sort the table data based on the strike value. 
 *
 * The slider is used to filter and sort the data displayed in the table based on the selected value of slider thumb.
 *  @component

 * @returns {JSX.Element} A rendered Material React Table with a slider to control the displayed data.
 */


function StockDataTable() {
  

  const { isLoading, stockData, strikeBasedData, setStrikeBasedData } = useFetchStockData();
  const tableRef=useRef(null);
  const {handleSliderChange} = useSliderData(stockData, setStrikeBasedData);
 const [loadingTextPos, setLoadingTextPos] = useState(0);
 console.log("parent rendered")
 let maxVal=0  

  maxVal= useMemo( ()=>{return Math.max(...strikeBasedData.map((item)=>item['percent_return_1_sigma_max_risk']))},[strikeBasedData])
 
//update value of loadingTextPos to set top of toading text according to MRT height  
useEffect(() => {
  if (tableRef.current) {
    setLoadingTextPos((tableRef.current.clientHeight / 2) + 140);
  }
}, [isLoading, strikeBasedData]);
  

//column declaration -optimized which avoids recalculation based on unnecessary rerender
  const columns = useMemo(() => [
    { accessorKey: "strike", header: "Strike",
      Header:()=>(<div style={{textAlign:"center"}}> Strike</div>),
      
      Cell:({cell})=>formatNumber(cell.getValue()),
      size:20,
     },
    { accessorKey: "percent_in_out_money", header:"Percentage In Out Money",
      Header:()=>(<div >
        
          %
          <br />
          In/Out
          <br/>
          Money
        
      </div>) ,
       muiTableHeadCellProps:()=>({
        sx:{...headerCellStyle,
          maxWidth:"130px",
          width:"130px"
        }
       }),
    
      Cell:({cell})=>{
        //to display cell value with + and - sign
        let n=cell.getValue()
        let n1=formatNumber(n); 
         if(n>0){
        return `+${n1}`;
      }
      else{
        return n1;
      }

    
    },
     
    muiFilterTextFieldProps:()=>{
     
      return {
       
        sx:{
         color:"rgba(255,255,255,0.5)",
         borderBottom:"1px solid rgba(255,255,255,0.5) ",  
         '& .MuiInputBase-input': {
          fontSize: '1rem',            
          color: "white", 
          
        },  
        }
      }
    },
    filterVariant:"multi-select",
   filterSelectOptions:["In","Out"],
   filterFn: (row, _columnIds, filterValue) =>{
    //console.log(filterValue)

    //if both options are selected (In and Out)
     if(filterValue.length==2 )
     {
      return true
     }
     else if(filterValue[0]=='In')
     {
      return row.getValue('percent_in_out_money')>=0
     }
     else if(filterValue[0]=='Out')
     {
      return row.getValue('percent_in_out_money')<0
     }
   
 
  },
 
   muiTableBodyCellProps:({cell})=>{
   return {
    sx:{...commonTableRowCellStyle,
       
         backgroundColor:cell.getValue()>0?` ${theme.palette.customColors.greaterThanZeroFilter} !important`:`${theme.palette.customColors.lessEqualZeroFilter}!important`
    }
   }
   }
     },
    { accessorKey: "percent_max_risk", header: "% Max Risk", 
      Header:()=>(<div >%<br/>Max<br/>Risk</div>),
      enableClickToCopy: false,
   
      Cell:({cell})=>formatNumber(cell.getValue()),
         },
    { accessorKey: "percent_cost_to_insure", header: "% Cost To Insure",
    

      Header:()=>(<div>%<br/>Cost<br/>To<br/>Insure</div>),
      Cell:({cell})=>formatNumber(cell.getValue()),
     },
    { accessorKey: "sigma_break_even", header: "Sigma Break Even",
   
      Header:()=>(<div>Sigma<br/>Break<br/>Even</div>),
      Cell:({cell})=>formatNumber(cell.getValue()),
     },
    { accessorKey: "percent_to_dbl", header: "% to Dbl" ,
     Header:()=>(<div>To<br/>Dbl</div>),
     Cell:({cell})=>formatNumber(cell.getValue()),
    },
    { accessorKey: "prob_above", header: "Prob Above" ,Header:()=>(<div>
      Prob<br/> Above
    </div>),
       cell:({value})=>formatNumber(value),},
    { accessorKey: "opt_mid_price", header: "Opt Mid Price",
      Header:()=>(<div>Opt<br/>Mid<br/>Price</div>),
      Cell:({cell})=>formatNumber(cell.getValue()),
     },
    { accessorKey: "percent_ask_time_value", header: "% Ask Time Value" ,
      Header:()=>(<div>%<br/>Ask<br/>Time<br/>Value</div>),
      Cell:({cell})=>formatNumber(cell.getValue()),
    },
    { accessorKey: "delta", header: "Delta",
      Header:()=>(<div>Delta</div>),
      Cell:({cell})=>formatNumber(cell.getValue()),
     },
    { accessorKey: "opt_open_int", header: "Opt Open Int" ,
      Header:()=>(<div>Opt<br/>Open<br/>Int</div>),
      Cell:({cell})=>(cell.getValue()).toLocaleString('en-US'),
    },
    { accessorKey: "black_scholes_ratio_siv", header: "Black Scholes Ratio  (SIV)" ,Header:()=>(<div>Black<br/>Scholes<br/>Ratio<br/>(SIV)</div>),
      Cell:({cell})=>formatNumber(cell.getValue()),
    },
    { accessorKey: "black_scholes_ratio_50_day", header: "Black Scholes Ratio (50 Day)",Header:()=>(<div>Black<br/>Scholes<br/>Ratio<br/>(50 Day)</div>) ,
      Cell:({cell})=>formatNumber(cell.getValue()),
    },
    { accessorKey: "iv_hv", header: "IV/HV" ,
      Cell:({cell})=>formatNumber(cell.getValue()),
    },
    { accessorKey: "percent_bid_ask_spread", header: "% BA Spread",
      Header:()=>(<div>%<br/>BA <br/>Spread</div>),
      Cell:({cell})=>formatNumber(cell.getValue()),
     },
    { accessorKey: "percent_return_1_sigma_max_risk", header:"",
      Header:() => (
      <div >
        <div>% {`Return 1σ`}</div>
        
        <div style={{ width: "95%" ,height:"2px",background:"gray"}}></div>
        <div>% Max Risk</div>
      </div>
    ),
    Cell:({cell})=>formatNumber(cell.getValue()),
    muiTableHeadCellProps:()=>{
        return{
            sx:{...headerCellStyle,
                width:"160px !important",
                maxWidth:"160px !important"
            }
        }
    },
    muiTableBodyCellProps:({ cell,row }) => {
      // calculate the percentage relative to the max value
      
      const percentage =(cell.getValue()/maxVal)*100;

      // determine color based on percentage ranges
      let backgroundColor='';
      if (percentage<=10) {
        backgroundColor=theme.palette.customColors.pink;
      } else if (percentage<=50) {
        backgroundColor=theme.palette.customColors.yellow;
      } else {
        backgroundColor=theme.palette.customColors.green;
      }

      return {
        sx: {
         ...commonTableRowCellStyle,
          textAlign:"right",
          position:'relative',
          boxSizing:"border-box",
          '&::before':{
            content:'""',
            position:'absolute',
            top:0,
            left:0,
            width:`${percentage}%`, // dynamic width based on percentage
            height:'100%',
            backgroundColor,
            zIndex:-1,
           
          },
        
         
        },
      }
  }
}
  ], [strikeBasedData]);


  //generate table from useMateralReactTable hook
  const table = useMaterialReactTable({
    columns,
    data: strikeBasedData,
  
    enableStickyHeader: true,
    
    muiTableHeadCellProps: {
      sx: {...headerCellStyle}
    },

    //update styles for table body cells
    muiTableBodyCellProps:()=> {
      
      return {
        
        sx: {...commonTableRowCellStyle        
      }}
    },
    //set table container height
    muiTableContainerProps: {
      sx: {
        maxHeight: "523px"
      }
    },
  
    defaultColumn:{
  size:30,  //to set size of column 
    },

    //to set style for table body rows
    muiTableBodyRowProps: ({ row }) => {
      return {
        sx: {
          borderBottom: "1px solid rgb(224, 224, 224)",
        }
      }
    }   
    ,
    //set style for input field of filter
    muiFilterTextFieldProps:()=>{
      return {
        sx:{
        
         ...textFilterStyle 
       
        }
      }
    },
    muiColumnActionsButtonProps:()=>({
     sx:{
      color:`${theme.palette.primary.contrastText}`,
      opacity:1,
      boxShadow:"none",
    
     },
     disableRipple:true
    }),
    enableBottomToolbar:false,
    enableDensityToggle:false,
    enableFullScreenToggle:false,
    enableTopToolbar:true,
    
    enableHiding:false,
    
    
    enableColumnFilters:true,
    initialState: { 
      showColumnFilters: true,
      
      density:"compact",
      showGlobalFilter:false,
           }, 
      state:{isLoading},
    
    enablePagination: false,
 //to render slider and title inside table  container 
    renderTopToolbarCustomActions:() => {
      return <TableHeaderSlider handleSliderChange={handleSliderChange} stockData={stockData} />
    },

    renderToolbarInternalActions:({ table }) => {
      //to render toggleFilterButton
      return (
        <>
          <MRT_ToggleFiltersButton table={table}  />
        </>
      );
    },
    
  });
  
  return (
     <>
     <div ref={tableRef}>
    <Container sx={{ padding:"0 15px",width:"100%", minWidth:"100%", paddingLeft: "2rem" }} >
      
      <MaterialReactTable 
         table={table}
        
      />
     
    </Container>
    </div>
    {isLoading && tableRef.current?<p style={
      {position:"absolute",
      top:`${loadingTextPos?loadingTextPos:0}px`,
      left:"50%",
      transform:"translateX(-50%)",
      fontWeight:"bold",
      color:"rgba(0,0,0,0.5)",
      zIndex:5}
      }>
        Data is Loading...
        </p>:""
        }

      </>
  );
}

export default StockDataTable;
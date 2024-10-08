
import {  createTheme } from "@mui/material";

let theme=createTheme({

    palette: {
       
        primary: {
          main: 'rgb(15, 23, 42)',
          contrastText:"rgb(255,255,255)"
        },
        secondary: {
          main: 'rgb(255,255,255)',
          contrastText:"rgb(0,0,0)"
        },
        customColors:{
            lessEqualZeroFilter:'rgb(255,251,214)',
            greaterThanZeroFilter:'rgb(255,224,177)',
            pink:'rgb(255,160,160)',
            green:'rgb(166,245,188)',
            yellow:'rgb(255,227,122)',

        }
      },
    components:{
       
        MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              disableRipple: true, // No more ripple, on the whole application
            },
            
          },
         
        MuiSlider:{
            defaultProps:{
                sx:{
                    '&:hover':{
                        opacity:1,   
                    },
                    height:"8px"
                }
            },

        
            
            styleOverrides:{
                root:{
                   '& .MuiSlider-rail':{
                    backgroundColor:'rgb(210,210,210)',
                     },
                     '& .MuiSlider-valueLabel':{
                width:"22px !important",
                height:"22px !important",
                border:"1px solid rgb(229, 231, 235)",
               
                borderRadius:"5px !important",
                backgroundColor: "white !important",
                color:"black !important",
              

                      },
                      '& .MuiSlider-valueLabel:before': {
                        position: 'static !important', // Corrected here
                      },
                         },
                thumb:{
                  
                    color:"white",
                    border:"2px solid rgb(15,23,42)",
                    width:"27px",
                    height:"27px",
                    
                    '&.Mui-focusVisible,:hover':{
                        border:"7px double black !important",
                        boxShadow:"none"
                       
                    },
                    '&.Mui-active':{
                       
                         width:"27px",
                         height:"27px",

                    },
                  
                },
               
            }

        },
   
        MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: '1.1rem', //override to make tooltip font size larger
              },
            },
        },
       
        
        MuiTableSortLabel:{
            defaultProps:{
            //    active:true,
            },
    
            styleOverrides:{
                root:{
                    // color:"white !important",
                    opacity:"1 !important",
                   

                }
        },
        
       
       }
        ,

        
       
        MuiTableHead:{
        styleOverrides:{
            root:{
               
                '& .MuiTableCell-root':{
                    color:"white"
                },
                '& .MuiSvgIcon-root':{
                color:"white !important",
               
              },
            }
        }
        },
        MuiTableRow:{
            styleOverrides:{
                root:{
                    height:"30px !important"
                }
            }
        },
        MuiTableCell:{
            styleOverrides:{
                root:{
                 
                   // fontFamily:"font-family: Roboto, Helvetica, Arial, sans-serif; !important",
                fontWeight:"600",
                color:"black",
                
                textAlign:"right",
                // width:"120px",
                borderLeft:'1px  solid #b7b7b7',
                }
            }
        },
        MuiCollapse:{
         styleOverrides:{
            root:{
                borderBottom:"1px solid rgba(255,255,255,0.5)",
                '& :after':{
                      borderBottom: "2px solid #1976d2;",
                 left:"2px",
                 width:"91%",
             transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            
                }
            }
         }
        },
        MuiTable:{
            styleOverrides:{
                root:{
               
                "& tr:nth-of-type(odd) >td":{
                    backgroundColor:"white",

                },
                "& tr:nth-of-type(even) >td":{
                    backgroundColor:"#efefef",

                },
                "& tr:hover":{
                  backgroundColor:"(0, 0, 0, 0.04) !important",
                  transition:"0.1s all"
                  
                }
            }
            }
        },
        MuiChip:{
            styleOverrides:{
                label:{
                    color:"white",
                  overflow: "visible !important",
                }
            }
        },
       
        MuiList:{
            defaultProps:{
                dense:true
            },
       
        },
       

       
    }
    
    
})
export default theme;
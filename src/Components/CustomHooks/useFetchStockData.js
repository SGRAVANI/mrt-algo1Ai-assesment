import { useState, useEffect } from "react";
import { sortBasedOnStrike } from "../../utility/util.jsx";

/**  useFetchStockData - is a custom hook which returns loading, stockData and strikeBasedData states and it's state updation functions. it also set value of strikeBasedData state initially from filterd data fetched from API
  * @returns {Object} containing
  * - {Function} setIsLoading - to update value of isLaoding state,
  * - {Function} setStrikeBasedData - to update strikeBasedData state
  * - {Boolean} isLoading - to display loading initially while data is fetching from API and once data will be available it will updated as false
  * - {Array} stockData - state to store data fetched from API
  * - {Array} stockBasedData - to store filtered data bases on strikeValue 
 **/


const useFetchStockData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [stockData, setStockData] = useState([]);
    const [strikeBasedData, setStrikeBasedData] = useState([]);

    useEffect(() => {
        
        //fetch data initially and store it to stockData

    const  getStockData=async ()=>{
      try{
      let res=await fetch('https://frontendassignment-algo-one.netlify.app/table_data');
      let data=await res.json()
      setStockData(data)
     let dataToRender= sortBasedOnStrike(data,10)
    
    setStrikeBasedData(dataToRender)  //to set stockdata according to strike value based arrangement and sorting 
       setIsLoading(false)   //to add loading progressbar when data is fetching
    
   
      }
  catch(e){
   console.error(e.message)
  }
}  
getStockData()
    }, []);

    return { isLoading, stockData, strikeBasedData, setStrikeBasedData };
};

export default useFetchStockData;
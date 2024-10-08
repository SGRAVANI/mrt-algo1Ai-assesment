//functions to arrange data from API based on strike Value closer to 214.29

/**
 * evenOddSorting combines greaterHalf array and lessorEqual Half array and return sorted array with length equals to slider value
 *
 * This function  combines both input array bases on slider value. if slider Value is even then it picks same number of element from both list (if available) to generate array with length r
 * if slider value is odd then it will pick mid+1 element from greaterHalf and mid number of element from less tha Equal to Half
 * 
 * @param {Array} greaterHalf - contains elements which strike value is  greater than 214.29
 * @param {Array} lessEqualHalf - contains elements which strike value is less or equals to 214.29.
 * @param {Number} mid - splitting point [i.e. if slider value if 12 then mid will be sliderValue/2 which will be 12/2=6 and case of odd sliderValue it will be floor value] 
 * @returns {Array} - merged sorted array which contains half of the elements from greaterHalf and half of the elements from lessEqualHalf
 */

function evenOddSorting(greaterHalf,lessEqualHalf,mid,isEven,r)
  {
    if(greaterHalf.length<mid)
      {
        let rem=r-greaterHalf.length
        if(isEven)
        {
       return [...lessEqualHalf.slice(0,rem),...greaterHalf].sort((a,b)=>a.strike-b.strike)
        }
        else {
          return [...lessEqualHalf.slice(0,rem+1),...greaterHalf].sort((a,b)=>a.strike-b.strike)
        }
      }
      else if(lessEqualHalf.length<mid)
      {
        let rem=r-lessEqualHalf.length
        return isEven?[...lessEqualHalf,...greaterHalf.slice(0,rem)].sort((a,b)=>a.strike-b.strike):[...lessEqualHalf,...greaterHalf.slice(0,rem+1)].sort((a,b)=>a.strike-b.strike)
      }
      else{
        return isEven?[...lessEqualHalf.slice(0,mid),...greaterHalf.slice(0,mid)].sort((a,b)=>a.strike-b.strike):[...lessEqualHalf.slice(0,mid),...greaterHalf.slice(0,mid+1)].sort((a,b)=>a.strike-b.strike)
      }
  }


/**
 * sortBasedOnStrike function applies filters on data [strike value closer to 214.29 ] and return array with length equals to slider value 
 *
 * it works as below:
 * 1. function will sort data first bases on slider value
 * 2. divides array in to two subarrays bases on strike value <=214.29 and >214.29
 * 3. sort  resulatnt subarrays in ascending order (lessEqualHalf in below as greaterHalf will be already sorted )
 * 4. bases on slider value, select sliderValue/2 elements from both array
 * 5. if any subarry.length<mid then select rest of remaining elements from other half
 * 6. merge both subarray and return sorted merged array to render in MRT table
 * @param {Array} data - array to be filtered bases on strike value
 
 * @param {Number} r - slider Value , number of elements return by function should equals to r
 * @returns {Array} - filtered sorted array which length equals to r
 * */



  function sortBasedOnStrike(data,r)
  {
     
     let sortedAllRowsByStrike=[...data].sort((a,b)=>a.strike-b.strike)
     
     let lessEqualHalf=sortedAllRowsByStrike.filter((ele)=>ele.strike<=214.29)
     
     let greaterHalf=sortedAllRowsByStrike.filter((ele)=>ele.strike>214.29)
     lessEqualHalf.sort((a,b)=>b.strike-a.strike)
     let mid=Math.floor(r/2)
    if(r%2==0)
    {
    return evenOddSorting(greaterHalf,lessEqualHalf,mid,true,r)
    }
    else{
      return evenOddSorting(greaterHalf,lessEqualHalf,mid,false,r)
    }
    
  }

/**
 * `formatNumber` function will convert numeric float number to number with precision of 2 and comma separated integer part 
 *
 * @param {number} num  -number to format.
 * @returns {String} - string representation of number with formating
 */

  const formatNumber = (num) => {
    if(typeof(num)=='number')
    {
    return num.toLocaleString('en-US', {
        
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
  }
  else{
    return num
  }
};

  export {sortBasedOnStrike,formatNumber}
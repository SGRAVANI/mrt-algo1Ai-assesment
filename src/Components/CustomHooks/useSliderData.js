import { useCallback } from "react";
import { sortBasedOnStrike } from "../../utility/util.jsx";

/**  useSliderData - is a custom hook which returns handleSliderChange callback function to find current value of slider and update StrikeBasedData filtered from stockData
 * @param {Array} stockData - Array of objects fetched from API to render data in MRT table
 * @param {Function} setStrikeBasedData - State Updation function returned by useFetchStockData custom hook.
 * @returns {Object} contains
 * - {Function} handleSliderChange
 **/

const useSliderData = (stockData, setStrikeBasedData) => {
   
   /**
 *Handles the `mouseup` event when sliding or dragging the slider thumb.
 * This function updates the `strikeBasedData` state by filtering and sorting the data from `stockData` based on the current value of thumb of the slider.
 * @param {Object} event - The event object triggered by the `mouseup` event.
 * @param {Number} value - The current value of the slider.
 * @returns {void}
 */

   
    const handleSliderChange = useCallback((e, value) => {
        const dataToRender = sortBasedOnStrike(stockData, value);
        setStrikeBasedData(dataToRender);
    }, [stockData, setStrikeBasedData]);

    return { handleSliderChange };
};

export default useSliderData;
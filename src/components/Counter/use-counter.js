import { useState, useCallback } from "react";

export const useCount = (initialValue = 0, { min = 0, max = 5 } = {}) => {
    const [value, setValue] = useState(initialValue)

    const increment = useCallback(() => {
        setValue((currentValue) => {
            return Math.min(currentValue + 1, max)
        });
    }, [max]);

    const decrement = useCallback(() =>{
        setValue((currentValue) => {
            return Math.max(currentValue - 1, min)
        })        
    }, [min])
    
    const resetCounter = useCallback(() => {
        setValue((initialValue) => {
            return initialValue
        })
    }, [])
    //const resetCounter = () => setValue(initialValue)
    return {
        value,
        increment,
        decrement,
        resetCounter,
        setValue
    }

}
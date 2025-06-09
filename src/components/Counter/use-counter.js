import { useState } from "react";

export const useCount = (initialValue = 0, { min = 0, max = 5 } = {}) => {
    const [value, setValue] = useState(initialValue)

    const increment = () => setValue(Math.min(value + 1, max))
    const decrement = () => setValue(Math.max(value - 1, min))
    const resetCounter = () => setValue(initialValue)
    return {
        value,
        increment,
        decrement,
        resetCounter,
        setValue
    }

}
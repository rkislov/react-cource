import { useReducer } from "react"
import { useCount } from "../../Counter/use-counter"

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 0
}

const SET_NAME_ACTION = "setName"
const SET_TEXT_ACTION = "setText"
const SET_RATING_ACTION = "setRating"
const CLEAR_ACTION = "clear"

const reducer = (state, {type, payload} ) => {
    switch (type) {
        case SET_NAME_ACTION: 
            return {
                ...INITIAL_FORM,
                name: payload,
            }
    
        case SET_TEXT_ACTION: 
            return {
                ...state,
                text: payload
            }
        
        case SET_RATING_ACTION:
            return {
                ...state,
                rating: payload
            }

        case CLEAR_ACTION:
            return INITIAL_FORM

        default:
            return state
}
}


export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM)
    const { value: rating , increment, decrement, resetCounter } = useCount(0, { max: 5 });

    const { name, text} = form

    const onNameChange = (name) => {
        dispatch({type: SET_NAME_ACTION, payload: name})
    }

    const onTextChange = (text) => {
        dispatch({type: SET_TEXT_ACTION, payload: text})
    }

    const onRatingChange = (newRating) => {
        dispatch({type: SET_RATING_ACTION, payload: newRating})
    }
    
    const clear = () => {
        dispatch({type: CLEAR_ACTION})
        resetCounter();
    }


    return {
        form,
        onNameChange,
        onTextChange,
        clear,
        increment: () => {
            increment();
            onRatingChange(rating + 1);
        },
        decrement: () => {
            decrement();
            onRatingChange(rating - 1);
        },
        rating,
        
    }
}
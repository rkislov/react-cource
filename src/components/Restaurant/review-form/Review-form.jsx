import { useState, useReducer } from "react"
import { Counter } from "../../Counter/Counter"
import { useCount } from "../../Counter/use-counter"
import { useForm } from "./use-form"


export const ReviewForm = () => {
    const {form, onNameChange, onTextChange, clear, increment, decrement, rating} = useForm()
    const {name, text} = form

    return(
        <>
            <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
                <label className="form-label" htmlFor="name">Имя</label>
                <input id="name"
                autoComplete="off"
                    className="form-control"
                    value={name} 
                    onChange={(e) => onNameChange(e.target.value)}
                    
                />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="text">Текст отзыва</label>
                <textarea id="text"
                    className="form-control"
                    value={text} 
                    onChange={(e) => onTextChange(e.target.value)}
                    
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Рейтинг</label>
                <Counter 
                    value={rating}
                    onIncrement={increment}
                    onDecrement={decrement}
                />
            </div>
            <div className="mt-3">
                <button type="submit" className="btn btn-primary" onClick={() => {
                    clear()
            }}
                    >
                    Очистить
                </button>
            </div>
        </form>
        </>
    )
}
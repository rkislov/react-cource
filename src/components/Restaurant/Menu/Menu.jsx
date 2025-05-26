import { useState } from "react";
import { Counter } from "../../Counter/Counter";

export const Menu = ({item}) =>{

    return (
        <>
        <li key={item.id} className="item-list">
                    <strong>{item.name}</strong> - {item.price} ₽.
                    <div>Ингредиенты: {item.ingredients.join(', ')}</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                <Counter />
            </div>
        </li>
        </>
    )
}
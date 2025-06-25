import { useState } from "react";
import { Counter } from "../../Counter/Counter";
import styles from "./menu.module.css"

export const Menu = ({item}) =>{

    return (
        <>
        <li key={item.id} className="item-list">
                    <strong className={styles.name}>{item.name}</strong> - {item.price} ₽.
                    <div>Ингредиенты: {item.ingredients.join(', ')}</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                <Counter />
            </div>
        </li>
        </>
    )
}
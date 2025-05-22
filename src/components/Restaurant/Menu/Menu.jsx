import { useState } from "react";

export const Menu = ({item}) =>{

    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
        <li key={item.id} className="item-list">
                    <strong>{item.name}</strong> - {item.price} ₽.
                    <div>Ингредиенты: {item.ingredients.join(', ')}</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                <button 
                    onClick={decrement}
                    style={{ 
                        cursor: count === 0 ? 'not-allowed' : 'pointer'
                    }}
                    disabled={count === 0}
                >
                    -
                </button>
                <span style={{ margin: '0 5px' }}>{count}</span>
                <button 
                    onClick={increment}
                    style={{ 
      
                        cursor: count === 5 ? 'not-allowed' : 'pointer'
                    }}
                    disabled={count === 5}
                >
                    +
                </button>
            </div>
        </li>
        </>
    )
}
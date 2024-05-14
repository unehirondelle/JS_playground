import {useState} from 'react';

export const Counter = () => {
    const [value, setValue] = useState(0);

    const handleIncrement = () => setValue(curr => ++curr);
    const handleDecrement = () => setValue(curr => --curr);

    return (
        <div className={"flex items-center gap-2"}>
            <button data-testid="decrement-button" onClick={handleDecrement} className={"border border-white rounded leading-10 px-5 h-16"}>-</button>
            <button data-testid="increment-button" onClick={handleIncrement} className={"border border-white rounded leading-10 px-5 h-16"}>+</button>
            <span>clicked: {value}</span>
        </div>
    )
}
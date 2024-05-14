import {useState} from "react";
import {useDebounce} from "../hooks/useDebounce";

export const DebouncedInput = () => {
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 1000)

    return (
        <div>
            <input onChange={e => setValue(e.target.value)} value={debouncedValue} className={"text-gray-800 px-3"}/>
        </div>
    )
}
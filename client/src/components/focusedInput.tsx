import {useFocus} from "../hooks/useFocus";
import {Ref} from "react";

export const FocusedInput = () => {
    const [ref, isFocused] = useFocus()
    return (
        <div className={"flex input-center gap-2"}>
            <input ref={ref as Ref<HTMLInputElement>} className={"text-gray-800 px-3"}/>
            {isFocused ? <span>focused</span> : <span>not focused</span>}
        </div>
    );
}
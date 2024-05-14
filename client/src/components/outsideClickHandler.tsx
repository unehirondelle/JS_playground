import {useClickOutside} from "../hooks/useClickOutside";
import {Ref} from "react";

export const OutsideClickHandler = () => {
    const ref = useClickOutside(() => {
        alert('clicked outside');
    });
    return <div ref={ref as Ref<HTMLDivElement>}>Don't click me! I'm out.</div>
}
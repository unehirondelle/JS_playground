import {useHover} from "../hooks/useHover";
import {Ref} from "react";

export const HoverHandler = () => {
    const [ref, isHovered] = useHover();
    return (
        <div ref={ref as Ref<HTMLDivElement>}>{isHovered ? 'hovered' : 'not hovered'}</div>
    );
}
import {useToggle} from "../hooks/useToggle";

export const Toggle = () => {
    const [on, toggle] = useToggle(false)

    return (
        <div>
            <button onClick={toggle} className={"border border-white rounded px-5"}>{on ? 'On' : 'Off'}</button>
        </div>
    )
}
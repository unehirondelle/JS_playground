import {useState} from 'react';

export function useToggle(on: boolean): [boolean, () => void] {
    const [isOn, setIsOn] = useState(on);
    const handleToggle = () => setIsOn(curr => !curr);

    return [isOn, handleToggle];
}
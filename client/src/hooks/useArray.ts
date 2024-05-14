import {useCallback, useState} from 'react'

type UseArrayActions<T> = {
    push: (item: T) => void,
    removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {
    const [value, setValue] = useState<T[]>(initialValue);

    const push = useCallback((item: T) => {
        const updatedArray = [...value];
        updatedArray.push(item);
        setValue(updatedArray);
    }, [])

    const removeByIndex = useCallback((index: number) => {
        const updatedArray = [...value];
        updatedArray.splice(index, 1);
        setValue(updatedArray);
    }, [])

    return {value, push, removeByIndex}
}
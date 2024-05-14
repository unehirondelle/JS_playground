import {Ref, useCallback, useRef, useState} from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
    const [isHovered, setIsHovered] = useState(false);
    const elementRef = useRef<T>();

    const handleMouseOver = useCallback(() => setIsHovered(true), []);
    const handleMouseOut = useCallback(() => setIsHovered(false), []);

    const callbackRef = useCallback((node: T) => {
        if (elementRef.current) {
            elementRef.current.removeEventListener('mouseover', handleMouseOver)
            elementRef.current.removeEventListener('mouseout', handleMouseOut)
        }

        elementRef.current = node;

        if (elementRef.current) {
            elementRef.current.addEventListener('mouseover', handleMouseOver)
            elementRef.current.addEventListener('mouseout', handleMouseOut)
        }

    }, [handleMouseOut, handleMouseOver])

    return [callbackRef, isHovered]
}
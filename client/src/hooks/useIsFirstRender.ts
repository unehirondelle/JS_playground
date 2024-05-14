import {useRef, useEffect} from 'react';

export function useIsFirstRender(): boolean {
    const isFirstRef = useRef(true)

    useEffect(() => {
        isFirstRef.current = false;
    }, [])
    return isFirstRef.current;
}
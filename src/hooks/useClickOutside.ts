import {useCallback, useRef} from 'react'

export const useClickOutside = (callback: () => void) => {
    const ref = useRef<HTMLElement>();
    const handleClick = useCallback((e: any) => {
        if (!ref.current?.contains(e.target)) {
            callback();
        }
        return;
    }, []);

    return useCallback((node: HTMLElement) => {
        if (ref.current) {
            document.removeEventListener('click', handleClick);
        }

        ref.current = node;
        if (ref.current) {
            document.addEventListener('click', handleClick);
        }
    }, [handleClick]);
};
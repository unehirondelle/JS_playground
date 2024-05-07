import React, {Ref, useCallback, useRef, useState} from 'react'

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
    const [isFocused, setIsFocused] = useState(false);
    const nodeRef = useRef<T>();
    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);

    const callbackRef = useCallback((node: T) => {
        if (nodeRef.current) {
            nodeRef.current.removeEventListener('focus', handleFocus);
            nodeRef.current.removeEventListener('blur', handleBlur);
        }

        nodeRef.current = node;

        if (nodeRef.current) {
            nodeRef.current.addEventListener('focus', handleFocus);
            nodeRef.current.addEventListener('blur', handleBlur);
        }


    }, [handleBlur, handleFocus]);

    return [callbackRef, isFocused];
}
import {useEffect, useRef, useState} from 'react';

export function usePrevious<T>(value: T): T | undefined {
    const previousRef = useRef<T>();

    useEffect(() => {
        previousRef.current = value;
    }, [value])

    return previousRef.current;
}
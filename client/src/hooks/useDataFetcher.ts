import {useEffect, useState} from 'react';

export function useSWR<T = any, E = any>(
    _key: string,
    fetcher: () => T | Promise<T>
): {
    data?: T
    error?: E
} {
    const result = fetcher();
    const isPromise = result instanceof Promise;
    const [data, setData] = useState(isPromise ? undefined : result);
    const [error, setError] = useState()

    useEffect(() => {
        if (isPromise) {
            result.then(setData, setError)
        }
    }, [])

    return {data, error}
}
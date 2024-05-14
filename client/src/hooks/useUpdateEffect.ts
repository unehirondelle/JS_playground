import {EffectCallback, DependencyList, useEffect, useRef} from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
    const isFirstRef = useRef(true);

    useEffect(() => {
        if (!isFirstRef.current) {
            return effect()
        } else {
            isFirstRef.current = false
        }
    }, deps);
}
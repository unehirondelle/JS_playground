export const flat = (arr: any[], depth = 1) => {
    return arr.reduce((prev, curr) => {
        Array.isArray(curr) && depth ? prev.push(...flat(curr, depth - 1)) : prev.push(curr)
        return prev
    }, [])
}

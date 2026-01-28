export const pickRandomValue = (obj) => {
    const values = Object.values(obj)
    return values[Math.floor(Math.random() * values.length)]
    
}
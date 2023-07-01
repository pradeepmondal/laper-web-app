export const animRight = {
    hidden: { opacity: 0, x: "5vw" },
    visible: { opacity: 1, x: 0 },
    
}


export const animLeft = {
    hidden: { opacity: 0, x: "-5vw" },
    visible: { opacity: 1, x: 0 },
}

export const animClose = {
    hidden: { x: 0, opacity: 1 },
    visible: { x: '100vw', opacity: 0 },
    transition: { delay: 1 }
}
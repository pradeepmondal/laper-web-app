export const animRight = {
    hidden: { opacity: 0, x: "10rem" },
    visible: { opacity: 1, x: 0 },
    transition: { type: "spring", stiffness: 150, duration : 1 }
    
}


export const animLeft = {
    hidden: { opacity: 0, x: "-10rem" },
    visible: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { type: "spring", stiffness: 150 }
}
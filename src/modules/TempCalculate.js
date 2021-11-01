export const calcCelsius = (temp) => { 
    return Math.round(temp - 273.15)
} 

export const calcFahr  = (temp) => { 
    return Math.round((calcCelsius(temp) * 1.8) + 32)
} 
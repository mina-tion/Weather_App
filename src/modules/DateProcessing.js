export const getCurrentDt = (timezone) => {
    const date = new Date()
    const localTime = date.getTime()
    const localOffset = date.getTimezoneOffset() * 60000
    const utc = localTime + localOffset
    const currentTime = utc + (1000 * timezone)
    return new Date(currentTime)
}


export const getStringDay = (n) => { 

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    return days[n];

}

export const getStringMonth = (n) => { 

    const days = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    return days[n];

}
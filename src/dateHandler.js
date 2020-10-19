function isUTC(date) {
    const regex = /^((\d{4})-(\d{2}|\d{1})-(\d{2}|\d{1}))$/g
    return regex.test(date)
}

function isUnixTimetamp(ms) {
    const regex = /^\d*$/g
    return regex.test(ms)
}

function parseDate(date) {
    if (isUTC(date)) {
        date = new Date(date)
    } else if (isUnixTimetamp(date)) {
        date = new Date(parseInt(date))
    } else {
        date = false
    }
    return date 
}

function timestamp(req, res) {
    let date = req.params.date

    date = parseDate(date)

    if (date) {
        res.json({
            unix: date.getTime(), 
            utc: date.toUTCString()
        })
    } else {
        res.json({"error" : "Invalid Date" })
    }
    
}

module.exports = timestamp
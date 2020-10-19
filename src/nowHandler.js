function nowHandler (req, res) {
    const date = new Date(Date.now())
    res.json({ 
        unix: date.getTime(), 
        utc: date.toUTCString() 
    });
}

module.exports = nowHandler
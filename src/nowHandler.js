function nowHandler (req, res) {
    res.json({ unix: Date.now(), utc: Date() });
}

module.exports = nowHandler
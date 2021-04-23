module.exports = (req, res) => {
    res.send(`Hello ${res.query}!`)
}
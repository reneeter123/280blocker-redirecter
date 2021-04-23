module.exports = (req, res) => {
    const {
        query: { redirect },
    } = req

    res.send(`Hello ${redirect}!`)
}
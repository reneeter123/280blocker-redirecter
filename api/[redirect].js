module.exports = (req, res) => {
    const redirect = req.query.redirect.split(".")
    const now = new Date();

    res.redirect(302, `https://280blocker.net/files/280blocker_${redirect[0]}_${now.getFullYear()}${`0${now.getMonth() + 1}`.slice(-2)}.${redirect[1]}`);
};
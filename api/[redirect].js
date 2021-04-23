module.exports = (req, res) => {
    const now = new Date();

    res.redirect(302, `https://280blocker.net/files/280blocker_${req.query.redirect}_${now.getFullYear()}${`0${now.getMonth() + 1}`.slice(-2)}.txt`);
};
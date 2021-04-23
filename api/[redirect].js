module.exports = (req, res) => {
    const {
        query: { name }
    } = req;
    const now = new Date();

    res.redirect(302, `https://280blocker.net/files/280blocker_${name}_${now.getFullYear()}${`0${now.getMonth() + 1}`.slice(-2)}.txt`);
};
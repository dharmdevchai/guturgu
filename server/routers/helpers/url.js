function getUrl(path) {
    return process.env.BASE_URL ? `${process.env.BASE_URL}${path}` : `http://localhost:5000${path}`;
}
module.exports = { getUrl };


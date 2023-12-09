exports.version = (req, res, next) => {
    return res.status(200).json('brecha-cero-latam-backend');
}
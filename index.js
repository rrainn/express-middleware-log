module.exports = function (string, res, next) {
	if (next) {
		return next();
	}
	return function (req, res, next) {
		if (string) {
			console.log(string);
		}
		next();
	}
}
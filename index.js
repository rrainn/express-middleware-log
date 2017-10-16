module.exports = function (string, res, next) {
	if (next) {
		return next();
	}
	return function (req, res, next) {
		if (typeof string === "function") {
			console.log(string(req, res));
		} else if (string) {
			console.log(string);
		}
		next();
	}
}
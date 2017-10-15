module.exports = function (string) {
	return function (req, res, next) {
		if (string) {
			console.log(string);
		}
		next();
	}
}
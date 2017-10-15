module.exports = function (string) {
	return function (req, res, next) {
		console.log(string);
		next();
	}
}
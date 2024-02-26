class UserController {
	async registration(req, res) {
		res.status(200).json({});
	}
	async login(req, res) {}
	async check(req, res) {
		res.json({ auth: 'checkAuthController' });
	}
}

module.exports = new UserController();

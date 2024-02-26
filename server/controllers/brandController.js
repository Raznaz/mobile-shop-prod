class brandController {
	async create(req, res) {
		res.status(200).json({});
	}

	async getAll(req, res) {
		res.status(200).json({ message: 'getAllBrands Controller' });
	}

	async remove(req, res) {
		res.status(200).json({});
	}

	async update(req, res) {
		res.status(200).json({ message: 'UPDATE' });
	}
}

module.exports = new brandController();

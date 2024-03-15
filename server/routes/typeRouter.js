const Router = require('express');
const typeController = require('../controllers/typeController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create);
router.get('/', typeController.getAll);
router.delete('/:id', typeController.remove);

module.exports = router;

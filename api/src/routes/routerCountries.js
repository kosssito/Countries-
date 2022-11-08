const { Router } = require('express');
const { getCountriesAll, getCountry } = require('../controllers/countries');
const router = Router();

router.get('/' ,getCountriesAll)
router.get('/:id',getCountry)

module.exports = router
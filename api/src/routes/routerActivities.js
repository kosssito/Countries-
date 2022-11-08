const { Router } = require('express');
const { activitiesPost , activitiesGet} = require('../controllers/activities');
const router = Router();

router.post('/',activitiesPost)
router.get('/',activitiesGet)

module.exports = router
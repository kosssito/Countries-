const { Router } = require('express');
const { activitiesPost, activitiesFind } = require('../controllers/activities');
const router = Router();

router.post('/',activitiesPost)
router.get('/',activitiesFind)

module.exports = router
const { Router } = require('express');
const { activitiesPost } = require('../controllers/activities');
const router = Router();

router.post('/',activitiesPost)

module.exports = router
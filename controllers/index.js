const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

const dashboardRoutes = require('./dashboard-routes.js');
router.use('/dashboard', dashboardRoutes);

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

module.exports = router;
"use strict";

const Router = require("koa-router");
const spotsController = require("./controllers/spots");
const auth = require("./middlewares/auth");
const router = new Router();
router.post("/spots", spotsController.demoFunction);  // Spot create api

module.exports = router;

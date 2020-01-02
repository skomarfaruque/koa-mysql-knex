"use strict";
const errorResponseHandler = require("../middlewares/errorResponseHandler");
const kenex = require('../config/db');
// const stringifySafe = require("../Helpers/stringifySafe");


exports.demoFunction = async ctx => {
  try {
    const body = ctx.request.body;
    const result = await kenex('spots').insert(body);
    // const customerReponse = await customerModel.annonymousUserAddOrUpdate(body);
    // const data = {
    //   id: customerReponse._id,
    //   token: customerReponse.customerToken.token
    // };
    ctx.response.ok(result, "Spot successfully created.");
  } catch (err) {
    // ctx.log.error(stringifySafe(err, null, 2));
    errorResponseHandler(ctx, err);
  }
};

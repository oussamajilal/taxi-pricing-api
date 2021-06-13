const validate = require('restify-api-validation');
const Joi = require('joi');

module.exports = {
    calculateRidePrice: validate({
        options: { flatten: true },
        body: {
            miles: Joi.number().required(),
            startTime: Joi.date().required().raw()
        }
    })
};
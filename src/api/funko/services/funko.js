'use strict';

/**
 * funko service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funko.funko');

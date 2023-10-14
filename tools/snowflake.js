const { Snowflake } = require('nodejs-snowflake');

const snowflake = new Snowflake({
  custom_epoch: 1704063600,
  instance_id: 1
});

module.exports = snowflake;
'use strict';

import isNumber from 'is-number'

module.exports = function isNotNumber(num) {
  return !isNumber(num);
};
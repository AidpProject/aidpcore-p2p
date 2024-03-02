'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on aidpcore-p2p Module {0}'
};

module.exports = require('aidpcore-lib').errors.extend(spec);

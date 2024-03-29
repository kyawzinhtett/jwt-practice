const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-error');

class UnauthenticatedError extends CustomAPIError {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;

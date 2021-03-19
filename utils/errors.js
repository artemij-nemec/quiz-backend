class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    } if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

class BadRequest extends GeneralError { }
class DBError extends GeneralError {
  constructor(messagge) {
    super();
    this.message = messagge ? messagge : 'Database Error';
  }
}
class NotFound extends GeneralError {
  constructor() {
    super();
    this.message = 'Not Found';
  }
}

module.exports = {
  GeneralError,
  BadRequest,
  DBError,
  NotFound
};

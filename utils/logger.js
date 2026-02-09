class Logger {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  _getPrefix() {
    return this.prefix ? `[${this.prefix}]` : null;
  }

  log(...args) {
    const prefix = this._getPrefix();
    prefix ? console.log(prefix, ...args) : console.log(...args);
  }

  info(...args) {
    const prefix = this._getPrefix();
    prefix ? console.info(prefix, ...args) : console.info(...args);
  }

  warn(...args) {
    const prefix = this._getPrefix();
    prefix ? console.warn(prefix, ...args) : console.warn(...args);
  }

  error(...args) {
    const prefix = this._getPrefix();
    prefix ? console.error(prefix, ...args) : console.error(...args);
  }

  debug(...args) {
    const prefix = this._getPrefix();
    prefix ? console.debug(prefix, ...args) : console.debug(...args);
  }
}

module.exports = Logger;

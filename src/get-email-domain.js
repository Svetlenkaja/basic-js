const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const indexOfAtSymbol = email.lastIndexOf('@');
    if (indexOfAtSymbol === -1) {
        throw new Error('Invalid email address');
    }
    return email.substring(indexOfAtSymbol + 1);
}

module.exports = {
  getEmailDomain
};

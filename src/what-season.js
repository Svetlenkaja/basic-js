const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date || Object.getOwnPropertyNames(date).length)) {
    throw new Error('Invalid date!');
  }

  try {
    date.getUTCDay();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  
  const monthes = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn|fall',
    'autumn|fall',
    'autumn|fall',
    'winter',
  ];

  const month = date.getMonth();
  return monthes[month];
}

module.exports = {
  getSeason
};

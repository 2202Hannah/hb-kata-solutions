// Please do not change the name of this function
const secondsToTimeString = input => {
  let totalTime = input;

  //calculate and subtract years
  const years = Math.floor(totalTime / 31536000);
  totalTime -= years * 31536000;

  //calculate and subtract months
  const months = Math.floor(totalTime / 2628000);
  totalTime -= months * 2628000;

  //calculate and subtract days
  const days = Math.floor(totalTime / 86400);
  totalTime -= days * 86400;
  
  //calculate and subtract whole hours
  const hours = Math.floor(totalTime / 3600);
  totalTime -= hours * 3600;
  
  //calculate and subtract whole minutes
  const minutes = Math.floor(totalTime / 60);
  totalTime -= minutes * 60;
  
  //calculate seconds
  const seconds = totalTime;

  const secondsStr = makeHumanReadable(seconds, ' second');
  const minutesStr = makeHumanReadable(minutes, ' minute');
  const hoursStr = makeHumanReadable(hours, ' hour');
  const daysStr = makeHumanReadable(days, ' day');
  const monthsStr = makeHumanReadable(months, ' month');
  const yearsStr = makeHumanReadable(years, ' year');

  let readableString = `${yearsStr}${monthsStr}${daysStr}${hoursStr}${minutesStr}${secondsStr}`.replace(
    /,\s*$/,
    ''
  );
  return readableString.replace(/,(?=[^,]*$)/, ' and');
};

function makeHumanReadable(num, singular) {
  return num > 0 ? num + (num === 1 ? `${singular}, ` : `${singular}s, `) : '';
}

module.exports = { secondsToTimeString };

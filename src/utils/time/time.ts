const A_MINUTE = 1;
const A_HOUR = A_MINUTE * 60;

interface HoursAndMinutes {
  hours: number;
  minutes: number;
}
export const minutesToHours = (minutes: number): HoursAndMinutes => {
  const hours = Math.floor(minutes / A_HOUR);
  const remainingMinutes = minutes % A_HOUR;

  return { hours, minutes: remainingMinutes };
};

export const minutesAndHoursToFormattedDuration = (hoursAndMinutes: HoursAndMinutes): string => {
  const { hours, minutes } = hoursAndMinutes;
  const hoursString = hours ? `${hours}h` : '';
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hoursString}${minutesString}${!hours ? 'min' : ''}`;
};

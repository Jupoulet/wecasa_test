import { minutesAndHoursToFormattedDuration, minutesToHours } from './time';

describe('Utils functions', () => {
  describe('minutesToHours', () => {
    it('Given an amount of minute, the fonction return the amount of hours and minutes', () => {
      const { hours, minutes } = minutesToHours(60);
      expect(hours).toEqual(1);
      expect(minutes).toEqual(0);

      const { hours: hours2, minutes: minutes2 } = minutesToHours(75);
      expect(hours2).toEqual(1);
      expect(minutes2).toEqual(15);
    });

    it('Given 0 minutes, should return 0 hours and 0 minutes', () => {
      const { hours, minutes } = minutesToHours(0);
      expect(hours).toEqual(0);
      expect(minutes).toEqual(0);
    });
  });

  describe('minutesAndHoursToFormattedDuration', () => {
    it('Returns well formatted duration string given an amount of hours and minutes', () => {
      const durationString = minutesAndHoursToFormattedDuration({ hours: 1, minutes: 15 });
      expect(durationString).toEqual('1h15');
    });

    it('Explicitly specify minutes when hours < 1', () => {
      const durationString = minutesAndHoursToFormattedDuration({ hours: 0, minutes: 15 });
      expect(durationString).toEqual('15min');
    });

    it('Prefix the string with 0 if the minutes are below 10', () => {
      const durationString = minutesAndHoursToFormattedDuration({ hours: 14, minutes: 5 });
      expect(durationString).toEqual('14h05');
    });
  });
});

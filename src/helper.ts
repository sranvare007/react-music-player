export const helpers = {
  getTimeInMinutesFromSeconds: function (seconds: number) {
    const minutesElpased = (seconds / 60).toFixed(0);
    const secondsElapsed = (seconds % 60).toFixed(0);

    return `${
      minutesElpased.length < 2 ? "0" + minutesElpased : minutesElpased
    }:${secondsElapsed.length < 2 ? "0" + secondsElapsed : secondsElapsed}`;
  },
};

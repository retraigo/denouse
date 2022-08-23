// import { AddZero } from "../add/addZero.ts";

export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  //  toString: () => string;
}

/**
 * Get current time as an object
 * @returns Object with hours, minutes, seconds, and milliseconds.
 */
export function useTime(): Time {
  const time = new Date();
  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    milliseconds: time.getMilliseconds(),
    /*
    toString: () =>
      `${AddZero(time.getHours(), 2)}:${AddZero(time.getMinutes(), 2)}:${
        AddZero(time.getSeconds(), 2)
      }:${AddZero(time.getMilliseconds(), 2)}`,
    */
  };
}

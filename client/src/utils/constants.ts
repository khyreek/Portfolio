import { TimeRepresentation } from "../types/utility";

const CONSECUTIVE_NUMERICAL_TIME_CONVERSIONS: {
    /**
     * The numbers you need to divide from the previous key in the object to get
     * to the time representation.
     */
    [R in TimeRepresentation]: number;
} = {
    millisecond: 1,
    second: 1000,
    minute: 60,
    hour: 60,
    day: 24,
    week: 7,
    month: 4 + 1 / 3,
    year: 12,
};

export { CONSECUTIVE_NUMERICAL_TIME_CONVERSIONS };

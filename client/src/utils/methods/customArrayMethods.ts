/**
 * Doing them as functions instead of adding them to the Array prototype
 * because it makes the importing implicit and;
 *
 * "Array prototype is read only, properties should not be added.eslint(no-extend-native)"
 */

function sumArray(array: number[]) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

export { sumArray };

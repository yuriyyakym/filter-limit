type Predicate<T> = (value: T, index: number, array: T[]) => unknown;
type GuardedPredicate<T, S extends T> = (value: T, index: number, array: T[]) => value is S;

function filterLimit<T, S extends T>(array: T[], limit: number, predicate: GuardedPredicate<T, S>, thisArg?: any): S[];
function filterLimit<T>(array: T[], limit: number, predicate: Predicate<T>, thisArg?: any): T[];

function filterLimit<T, S extends T>(
  array: T[],
  limit: number,
  predicate: Predicate<T> | GuardedPredicate<T, S>,
  thisArg?: any,
) {
  if (limit <= 0) {
    return [];
  }

  const result: T[] = [];
  let startIndex = 0;

  const localPredicate: Predicate<T> = (value, sliceIndex) => {
    return predicate.call(thisArg, value, startIndex + sliceIndex, array);
  };

  while (limit-- && startIndex < array.length) {
    const itemIndex = array.slice(startIndex).findIndex(localPredicate);

    if (itemIndex === -1) {
      return result;
    }

    result.push(array[startIndex + itemIndex]);
    startIndex = startIndex + itemIndex + 1;
  }

  return result;
}

export default filterLimit;

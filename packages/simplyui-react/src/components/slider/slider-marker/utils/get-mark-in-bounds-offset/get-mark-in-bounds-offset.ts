export function getMarkInBoundsOffset(width: number, left: number, direction: number) {
  const halfWidth = width / 2;
  const halfPercent = 50;

  function linearScale(input: readonly [number, number], output: readonly [number, number]) {
    return (value: number) => {
      if (input[0] === input[1] || output[0] === output[1]) return output[0];
      const ratio = (output[1] - output[0]) / (input[1] - input[0]);
      return output[0] + ratio * (value - input[0]);
    };
  }

  const offset = linearScale([0, halfPercent], [0, halfWidth]);

  return (halfWidth - offset(left) * direction) * direction;
}

export class RomanConverter {
  private map: Map<string, number> = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]);

  public convert(romanNumber: string): number {
    let result: number = 0;

    for (let i = 0; i < romanNumber.length; i++) {
      const currentValue: number | undefined = this.map.get(romanNumber[i]);

      if (currentValue === undefined) {
        return -1;
      }

      const nextValue: number | undefined = this.map.get(romanNumber[i + 1]);

      if (currentValue && nextValue && nextValue > currentValue) {
        result += nextValue - currentValue;
        i++;
        continue;
      }

      if (currentValue) {
        result += currentValue;
      }
    }

    return result;
  }
}
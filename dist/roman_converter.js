"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanConverter = void 0;
class RomanConverter {
    constructor() {
        this.map = new Map([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000]
        ]);
    }
    convert(romanNumber) {
        let result = 0;
        for (let i = 0; i < romanNumber.length; i++) {
            const currentValue = this.map.get(romanNumber[i]);
            if (currentValue === undefined) {
                return -1;
            }
            const nextValue = this.map.get(romanNumber[i + 1]);
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
exports.RomanConverter = RomanConverter;

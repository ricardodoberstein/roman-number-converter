import { RomanConverter } from "../src/roman_converter";

describe('RomanConverter', () => {
  let converter: RomanConverter = new RomanConverter();

  beforeEach(() => {
    converter = new RomanConverter();
  })

  it('should return -1 if the number is invalid roman number', () => {
    const romanNumber = "SOMEJIBERISH";
    expect(converter.convert(romanNumber)).toEqual(-1);
  })

  it('should convert I to 1', () => {
    const romanNumber = "I";
    expect(converter.convert(romanNumber)).toEqual(1);
  });

  it('should convert II to 2', () => {
    const romanNumber = "II";
    expect(converter.convert(romanNumber)).toEqual(2);
  });

  it('should convert III to 3', () => {
    const romanNumber = "III";
    expect(converter.convert(romanNumber)).toEqual(3);
  });

  it('should convert IV to 4', () => {
    const romanNumber = "IV";
    expect(converter.convert(romanNumber)).toEqual(4);
  });

  it('should convert V to 5', () => {
    const romanNumber = "V";
    expect(converter.convert(romanNumber)).toEqual(5);
  });

  it('should convert VI to 6', () => {
    const romanNumber = "VI";
    expect(converter.convert(romanNumber)).toEqual(6);
  });

  it('should convert VII to 7', () => {
    const romanNumber = "VII";
    expect(converter.convert(romanNumber)).toEqual(7);
  });

  it('should convert VIII to 8', () => {
    const romanNumber = "VIII";
    expect(converter.convert(romanNumber)).toEqual(8);
  });

  it('should convert IX to 9', () => {
    const romanNumber = "IX";
    expect(converter.convert(romanNumber)).toEqual(9);
  });

  it('should convert X to 10', () => {
    const romanNumber = "X";
    expect(converter.convert(romanNumber)).toEqual(10);
  });

  it('should convert X to 11', () => {
    const romanNumber = "XI";
    expect(converter.convert(romanNumber)).toEqual(11);
  });

  it('should convert XII to 12', () => {
    const romanNumber = "XII";
    expect(converter.convert(romanNumber)).toEqual(12);
  });

  it('should convert XXVIII to 28', () => {
    const romanNumber = "XXVIII";
    expect(converter.convert(romanNumber)).toEqual(28);
  });

  it('should convert LXVIII to 68', () => {
    const romanNumber = "LXVIII";
    expect(converter.convert(romanNumber)).toEqual(68);
  });

  it('should convert DCCC to 800', () => {
    const romanNumber = "DCCC";
    expect(converter.convert(romanNumber)).toEqual(800);
  });

  it('should convert C to 100', () => {
    const romanNumber = "C";
    expect(converter.convert(romanNumber)).toEqual(100);
  });

  it('should convert D to 500', () => {
    const romanNumber = "D";
    expect(converter.convert(romanNumber)).toEqual(500);
  });

  it('should convert M to 1000', () => {
    const romanNumber = "M";
    expect(converter.convert(romanNumber)).toEqual(1000);
  });
  
  it('should convert MI to 1001', () => {
    const romanNumber = "MI";
    expect(converter.convert(romanNumber)).toEqual(1001);
  });
})
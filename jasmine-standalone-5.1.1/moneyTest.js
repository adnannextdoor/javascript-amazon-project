import {formatCurrency} from "../scripts/utils/money.js";

describe('test suite: default formatCurrency', () => {
  it('code works with a number', () => {
    expect(formatCurrency(2095)).toEqual('20.95')
  });
});

describe('test suite: edge formatCurrency', () => {
  it('code works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00')
  });

  it('code works with a decimal', () => {
    expect(formatCurrency(2500.5)).toEqual('25.01')
  });
});




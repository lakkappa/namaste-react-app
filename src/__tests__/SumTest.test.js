import { SumTest } from "../components/SumTest";
test('It should return a sum of 2 numbers', () => {
    const res = SumTest(3, 7);
    // assertion
    expect(res).toBe(10);
});
import { merge } from "../merge";

describe("MergeTest", () => {
  test("Case 1: all item in collection 1 < collection 2", () => {
    expect(merge([1, 2, 3], [7, 8, 9])).toStrictEqual([1, 2, 3, 7, 8, 9]);
  });

  test("Case 2: all item in collection 2 < collection 1", () => {
    expect(merge([17, 25, 78], [7, 8, 11])).toStrictEqual([
      7, 8, 11, 17, 25, 78,
    ]);
  });

  test("Case 3: collection 1 is empty", () => {
    expect(merge([], [7, 8, 9])).toStrictEqual([7, 8, 9]);
  });

  test("Case 4: collection 2 is empty", () => {
    expect(merge([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
  });

  test("Case 5: collection 1 & 2 is empty", () => {
    expect(merge([], [])).toStrictEqual([]);
  });

  test("Case 6: mix", () => {
    expect(merge([0, 5, 9], [1, 3, 3, 8])).toStrictEqual([0, 1, 3, 3, 5, 8, 9]);
  });

  test("Case 7: mix", () => {
    expect(
      merge([-8, -1, 0, 2, 2, 5, 8], [-1, 0, 2, 3, 4, 5, 9])
    ).toStrictEqual([-8, -1, -1, 0, 0, 2, 2, 2, 3, 4, 5, 5, 8, 9]);
  });
});

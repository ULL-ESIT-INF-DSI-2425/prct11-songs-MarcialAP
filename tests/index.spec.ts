import { describe, expect, test} from "vitest"
import { add } from "../src/index.ts"

describe("pruebas de la función add", () => {
  test("add(1,8) devuelve el valor 9", () => {
    expect(add(1,8)).toBe(9);
  });

  test("add(-9,7) devuelve el valor -2", () => {
    expect(add(-9,7)).toBe(-2);
  });
});
// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { filtrerPairs } from "../index";

describe("filtrerPairs", () => {
  test("devrait retourner un tableau vide si le tableau est vide", () => {
    expect(filtrerPairs([])).toEqual([]);
  });

  test("devrait retourner uniquement les nombres pairs", () => {
    expect(filtrerPairs([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test("devrait retourner un tableau vide si aucun nombre n'est pair", () => {
    expect(filtrerPairs([1, 3, 5, 7])).toEqual([]);
  });

  test("devrait retourner le même tableau si tous les nombres sont pairs", () => {
    expect(filtrerPairs([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  test("devrait fonctionner avec des nombres négatifs", () => {
    expect(filtrerPairs([-2, -3, -4, -5])).toEqual([-2, -4]);
  });

  test("devrait fonctionner avec zéro", () => {
    expect(filtrerPairs([0, 1, 2])).toEqual([0, 2]);
  });
});

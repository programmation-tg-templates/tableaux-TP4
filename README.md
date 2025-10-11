# Tableaux - TP4 - Filtrer les pairs

## Consignes

Écrire une fonction `filtrerPairs` qui prend en paramètre un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres pairs du tableau d'origine.

L'ordre des éléments doit être préservé.

**Signature de la fonction :**

```ts
function filtrerPairs(tableau: number[]): number[];
```

## Exemples

- `filtrerPairs([1, 2, 3, 4, 5, 6])` doit retourner `[2, 4, 6]`
- `filtrerPairs([10, 15, 20, 25, 30])` doit retourner `[10, 20, 30]`
- `filtrerPairs([1, 3, 5, 7])` doit retourner `[]`
- `filtrerPairs([2, 4, 6, 8])` doit retourner `[2, 4, 6, 8]`
- `filtrerPairs([])` doit retourner `[]`

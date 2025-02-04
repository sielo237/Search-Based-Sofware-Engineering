# Guide pour Démarrer TD 00_ Remind- Search Based Sofware Engineering`

## Préparation

Avant de commencer, assurez-vous que le fichier **`index.html`** ainsi que les dossiers de tous les exercices sont présents.

### 1. Ouvrir le Fichier

Ouvrez le fichier **`index.html`** dans votre navigateur. Vous verrez une interface avec une option de sélection pour choisir l'exercice que vous souhaitez tester.

---

## Instructions pour Tester chaque Exercice

### Exercice 1 : Binary Search

#### Instructions :
1. Sélectionnez **Binary Search** dans le menu déroulant.
2. Entrez une **liste triée** dans le champ prévu (séparée par des virgules). Si la liste n'est pas triée, un message d'erreur apparaîtra.
3. Entrez la **valeur cible** que vous souhaitez rechercher dans cette liste.
4. Cliquez sur **"Run Binary Search"**.

#### Exemple de Test :
- **Liste triée** : `1, 3, 5, 7, 9, 11`
- **Cible** : `5`
- **Résultat attendu** : `Index: 2`
- **Cas d'erreur** : Si la liste n'est pas triée (par exemple, `11, 5, 3`), vous verrez le message : "The list is not sorted. Please enter a sorted list and try again."

---

### Exercice 2 : Graph Traversal (BFS & DFS)

#### Instructions :
1. Sélectionnez **Graph Traversal** dans le menu déroulant.
2. Modifiez la **structure du graphe** dans le champ prévu (format `A:B,C; B:A,D,E; ...`).
3. Entrez le **nœud de départ** à partir duquel vous voulez commencer le parcours.
4. Cliquez sur **"Run Graph Traversal"**.

#### Exemple de Test :
- **Graphe** : `A:B,C; B:A,D,E; C:A,F; D:B; E:B,F; F:C,E`
- **Nœud de départ** : `A`
- **Résultat attendu** :
  - **BFS** : `A → B → C → D → E → F`
  - **DFS** : `A → B → D → E → F → C`

---

### Exercice 3 : Knapsack Problem

#### Instructions :
1. Sélectionnez **Knapsack Problem** dans le menu déroulant.
2. Entrez les **objets** sous forme de **valeur-poids** (format `value-weight`) dans le champ prévu.
3. Entrez la **capacité** du sac à dos.
4. Cliquez sur **"Run Knapsack"**.

#### Exemple de Test :
- **Objets** : `60-10,100-20,120-30`
- **Capacité** : `50`
- **Résultat attendu** :
  - **Valeur maximale** : `220`
  - **Objets sélectionnés** : `{ value: 120, weight: 30 }` et `{ value: 100, weight: 20 }`

---

### Exercice 4 : Merge Intervals

#### Instructions :
1. Sélectionnez **Merge Intervals** dans le menu déroulant.
2. Entrez une série d'**intervalles** (format `start-end`, séparés par des virgules) dans le champ prévu.
3. Cliquez sur **"Run Merge Intervals"**.

#### Exemple de Test :
- **Intervalles** : `1-3,2-6,8-10,15-18`
- **Résultat attendu** : `[[1, 6], [8, 10], [15, 18]]`

---

### Exercice 5 : Maximum Subarray Sum (Kadane's Algorithm)

#### Instructions :
1. Sélectionnez **Maximum Subarray Sum** dans le menu déroulant.
2. Entrez un **tableau d'entiers** (séparés par des virgules) dans le champ prévu.
3. Cliquez sur **"Run Kadane's Algorithm"**.

#### Exemple de Test :
- **Tableau** : `-2,1,-3,4,-1,2,1,-5,4`
- **Résultat attendu** :
  - **Somme maximale** : `6`
  - **Sous-tableau** : `[4, -1, 2, 1]`

---

### Remarques :
- Chaque exercice peut être testé avec des valeurs différentes.
- Les résultats sont affichés juste en dessous des champs de saisie après avoir cliqué sur le bouton **Run**.
- Les algorithmes sont écrits en **Javascript**.
  

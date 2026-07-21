# Ticket Ingénieur Full Stack

## Contexte
Ce ticket regroupe trois tâches principales visant à améliorer l'interface utilisateur, nettoyer le projet et sécuriser les dépendances.

---

## Tâche 1 : Amélioration de l'UI des Cartes de Compétences

**Priorité :** Moyenne
**Fichier concerné :** `src/components/home/Skills/Skills.tsx`

**Description :**
L'interface utilisateur actuelle des cartes de présentation de compétences présente des problèmes de disposition et d'espacement. Il est nécessaire de revoir le design pour une meilleure harmonie visuelle.

**Actions requises :**
1.  Analyser le composant `Skills.tsx`.
2.  Ajuster les espacements (padding, margin, gap) dans la grille `SimpleGrid` et le composant `Paper`.
3.  Vérifier l'alignement des éléments internes (icônes, textes, jauges de progression).
4.  S'assurer que le design est responsive et s'affiche correctement sur mobile et desktop.

---

## Tâche 2 : Nettoyage des Fichiers et Répertoires Inutiles

**Priorité :** Basse
**Cible :** Configuration de tests (Jest) et utilitaires associés

**Description :**
Le projet contient des fichiers et répertoires liés à Jest et aux tests unitaires qui ne sont plus utilisés. L'objectif est de ne garder que l'essentiel.

**Actions requises :**
Supprimer les fichiers et dossiers suivants s'ils ne sont pas utilisés ailleurs :
- `test-utils/` (Répertoire)
- `jest.config.js`
- `jest.setup.js`
- `jest.setup.cjs`
- Tout autre fichier de configuration lié uniquement à Jest (vérifier `package.json` pour les scripts `test` et dépendances `jest`, `ts-jest`, etc., et les nettoyer également).

**Note :** Pensez à retirer les dépendances correspondantes dans `package.json` (ex: `jest`, `@testing-library/*`, `ts-jest`) via `pnpm remove` ou `npm uninstall`.

---

## Tâche 3 : Mise à Jour des Dépendances (CVE)

**Priorité :** Haute
**Sujet :** Sécurité et CVE récentes

**Description :**
Une mise à jour des dépendances est nécessaire pour éviter les failles de sécurité. Une attention particulière doit être portée suite à une récente CVE critique mentionnée sur `react2shell` (source web 15/12/2025).

**Actions requises :**
1.  **Vérification Spécifique :** Bien que `react2shell` ne semble pas être une dépendance directe dans le `package.json` actuel, vérifiez si elle est présente dans les sous-dépendances (lockfile) ou si le nom a été mal orthographié.
2.  **Mise à jour Globale :** Lancer une mise à jour des dépendances du projet pour bénéficier des derniers correctifs de sécurité.
    ```bash
    pnpm update
    # ou
    npm update
    ```
3.  **Audit :** Exécuter `pnpm audit` ou `npm audit` pour identifier et corriger les vulnérabilités connues.

---

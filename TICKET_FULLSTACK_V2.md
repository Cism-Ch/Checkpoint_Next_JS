# Ticket Ingénieur Full Stack V2

## Contexte
Nouvelle série d'améliorations demandées pour l'interface utilisateur, la stabilité des données et la maintenance.

---

## Tâche 1 : Amélioration de la Responsivité et Uniformité des Cartes Compétences

**Priorité :** Haute
**Fichier concerné :** `src/components/home/Skills/Skills.tsx`

**Description :**
Les cartes de compétences (`Skills`) présentent des problèmes de hauteur incohérente (certaines sont plus grandes que d'autres en fonction du contenu) et de responsivité.

**Actions requises :**
1.  Forcer une hauteur uniforme pour toutes les cartes (ex: `h="100%"`).
2.  Aligner le contenu verticalement si nécessaire.
3.  Vérifier que le layout `SimpleGrid` se comporte bien sur tous les breakpoints.

---

## Tâche 2 : Remplacement du Service de Placeholder

**Priorité :** Moyenne
**Fichier concerné :** `src/data/projects.ts`

**Description :**
Le domaine `placehold.co` semble instable ou générer des erreurs. Il faut le remplacer par une alternative plus fiable pour les images de démonstration.

**Actions requises :**
1.  Remplacer toutes les occurrences de `https://placehold.co/...` par un autre service (ex: `https://dummyimage.com/600x400/000/fff`) ou utiliser des images locales si disponibles.
2.  Vérifier que les dimensions demandées sont respectées.

---

## Tâche 3 : Refonte UI de la Section Contact

**Priorité :** Moyenne
**Fichier concerné :** `src/components/home/Contact/Contact.tsx`

**Description :**
L'UI de la section contact est jugée "trop grande" et pas assez "user friendly". Les champs de formulaire et boutons sont trop imposants par rapport au reste du style.

**Actions requises :**
1.  Réduire la taille des composants (`TextInput`, `Textarea`, `Button`) de `lg` à `md` ou `sm`.
2.  Ajuster les espacements (marges, paddings) pour rendre le formulaire plus compact et élégant.
3.  Harmoniser le style avec le reste de l'application (basé sur le style actuel mais affiné).

---

## Tâche 4 : Vérification/Mise à jour de Next.js

**Priorité :** Basse
**Fichier concerné :** `package.json`

**Description :**
S'assurer que Next.js est à jour.

**Actions requises :**
1.  Vérifier la version actuelle (`package.json`).
2.  Si une version stable plus récente est disponible (et nécessaire), faire la mise à jour.
    *   *Note:* La version actuelle semble être `15.5.9` suite à la précédente mise à jour. Vérifier si des actions supplémentaires sont requises.

---


Pour simuler des images pendant le développement, utilisez le service placehold.co avec la syntaxe suivante :

```
https://placehold.co/600x400
```

Où :
- `600` représente la largeur en pixels (size1)
- `400` représente la hauteur en pixels (size2)

Exemples d'utilisation :
- Pour une image carrée : `https://placehold.co/400x400`
- Pour une vignette : `https://placehold.co/150x150`
- Pour une image de bannière : `https://placehold.co/1200x300`

Cette approche permet de :
1. Maintenir une mise en page cohérente pendant le développement
2. Visualiser rapidement les dimensions exactes des images
3. Éviter les problèmes de mise en page lors de l'intégration des images réelles
4. Simuler le chargement des images comme avec un skeleton loader

Vous pouvez utiliser ces URLs comme valeurs par défaut dans vos composants avant d'intégrer les images finales.

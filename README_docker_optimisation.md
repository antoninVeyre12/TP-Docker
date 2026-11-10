# TP Docker — Optimisation

Ce dépôt contient la réalisation du TP Docker optimisation dans le cadre du module **Intégration et déploiement continus** (Master 2 MIAGE IPM — Université Toulouse Capitole).

## Sommaire

## Analyser le code et le Dockerfile existants pour identifier les mauvaises pratiques.

# Analyse du code
1 - Un des problèmes de la route /big est que le fichier maybe-big-file.txt est chargé entièrement peu importe sa taille, ce qui peut saturer l'espace mémoire vive si le fichier est volumineux. Donc s'il n'y a pas assez d'espace sur la RAM pour charger le fichier l'application plantera.
2 - Un autre problème du code est sur la route /big les méthodes pour lire le fichier (fs.existsSync et fs.readFileSync) sont synchrones. Cela signifie que lorsque le serveur est en train de lire un fichier aucune autre route sur le serveur peut être apellé. Ce qui pose une limite dans le cadre de la gestion multi-utilisateurs de l'application.
3 - Un dernier problème de ce code se situe au niveau de la route /big lors de la conversion des sauts de lignes en balise html (res.send(data.replace(/\n/g, '<br/>'))). Avec cette méthode on peut facilement provoquer des failles XSS en plaçant dans le fichier des balises <script> permettant d'exécuter n'importe quel programme malveillant.

# Analyse du dockerfile
4 - EXPOSE 3000 4000 5000 : Il est suffisant d'exposer que sur un seul port car généralement le serveur va écouter sur un seul port.
5 - USER root : Si une attaque sur le conteneur survient, l'attaquant aura un accès avec le prvilège root.
6 - COPY node_modules ./node_modules : Le fait de copier tous les node modules dans l'image va gonfler la taille de celle-ci et va écraser les dépendances.
7 - COPY . /app RUN npm install : Le fait d'exécuter RUN npm install après la copie des fichiers de l'application est une mauvaise pratique car pour chaque ligne de code qui va être modifiée, docker va re-installer tous les paquets de RUN npm install qui n'auront pourtant pas changé
8 - FROM node:latest : Le dockerfile comprend tous les éléments dont l'installation des outils de build, ce qui augmente considérablement la taille de l'image.

# Les différentes versions : 
V0 : Etat actuel de l'application sans modification
V1 : Modification des mauvaises pratiques de sécurité (3 / 5)
V2 : Optimisation des ressources (1 / 2 / 4 / 6 / 7)

# Modification apportées : 

1 - Utilisaion de Stream pour éviter de saturer la RAM

2 - Utilisation de stream pour ne pas bloquer la lecture de fichier

3 - Ajout d'un entête HTTP 'text/plain' permettant de ne pas exécuter le code (cela spécifie que c'est du text brut)

4 - EXPOSE 5000

5 - USER node (utilisateur sans privilège)

6 - Supression de la ligne COPY node_modules ./node_modules

7 - Inverser l'ordre d'exécution des deux lignes (COPY . /app et RUN npm install)

8 - Décomposition du dockerfile en multi-stages 

# Comapraison des performances et de la taille des images

V0 : 
    - Temps de build de l'image : 12 secondes
    - Taille de l'image : 1.32GB

V1 : 
    - Temps de build de l'image : 11,632 secondes
    - Taille de l'image : 1.32GB

V2 : 
    - Temps de build de l'image : 3,542 secondes
    - Taille de l'image : 157MB

Conclusion : On a pu observer que la modification qui réduit le plus drastiqement la taille de l'image et le temps de build est la décomposition de l'image en deux stages distincts. Cela permet de ne pas inclure les dépendances non obligatoires à l'exécution de l'image.
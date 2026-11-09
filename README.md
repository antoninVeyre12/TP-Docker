# TP-Docker
TP Docker pour la matière Intégration et déploiement continus

# Exercice : Manipulation de base de conteneur

1 - Vérifier la version de Docker
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker --version
>> 
Docker version 29.9.2, build a82e528

2 - Listez les images disponibles sur votre machine 
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker images
IMAGE   ID             DISK USAGE   CONTENT SIZE   EXTRA

3 - Télécharger une image depuis Docker Hub
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker pull hello-world 
>> 
Using default tag: latest
latest: Pulling from library/hello-world
4f55086f7dd0: Pull complete 
Digest: sha256:c567b231f65614688711a75f31518a064258a51d442117a3e771a3a8fdba78ef
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest




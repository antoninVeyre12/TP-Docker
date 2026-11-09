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

4 - Exécuter un conteneur à partir de l'image
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/



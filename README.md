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


5 - Lister les conteneurs en cours d'exécution
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

6 - Lister tous les conteneurs (actif et stoppés)
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker ps -a
CONTAINER ID   IMAGE         COMMAND    CREATED         STATUS                     PORTS     NAMES
a6215f313d42   hello-world   "/hello"   4 minutes ago   Exited (0) 4 minutes ago             tender_franklin

7 - Supprimer un conteneur
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker rm a6215f313d42
a6215f313d42
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

8 - Supprimer une image 
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker rmi e2ac70e7319a
Untagged: hello-world:latest
Untagged: hello-world@sha256:c567b231f65614688711a75f31518a064258a51d442117a3e771a3a8fdba78ef
Deleted: sha256:e2ac70e7319a02c5a477f5825259bd118b94e8b02c279c67afa63adab6d8685b
Deleted: sha256:897b3f2a7c1bc2f3d02432f7892fe31c6272c521ad4d70257df624504a3238b4
PS C:\Users\anton\Documents\M2 MIAGE IPM\Integration et deploiement continus\TP\TP-Docker> docker images
IMAGE   ID             DISK USAGE   CONTENT SIZE   EXTRA


# API Express TypeScript avec PostgreSQL

Projet API Morgan

## Prérequis

Avant de commencer, assurez-vous que vous avez installé les outils suivants sur votre machine :

-   [Node.js](https://nodejs.org/)
-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/)
-   [Git](https://git-scm.com/)

## Installation

### 1. Clonez le projet

Clonez ce repository sur votre machine locale en utilisant Git :

git clone https://github.com/2024-devops-alt-dist/zythologue-mp

### 2. Installez les dépendances

Installez les dépendances du projet avec npm :

npm install

### 3. Configurez la base de données PostgreSQL

Si vous utilisez Docker, la base de données PostgreSQL sera lancée via Docker Compose. Assurez-vous que vous avez configuré votre fichier `.env` pour correspondre à votre base de données :

#### Exemple de fichier `.env` :

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=my_database
DB_PORT=5432

### 4. Démarrez le projet avec Docker

Si vous utilisez Docker pour la base de données, exécutez la commande suivante pour démarrer le service PostgreSQL :

docker-compose up -d

### 5. Exécutez le serveur

Démarrez le serveur Express :

npm run dev

Le serveur devrait maintenant être accessible sur `http://localhost:3000`.

## Scripts SQL

Les scripts SQL dans le src/db/ sont utilisés pour créer et peupler la bdd


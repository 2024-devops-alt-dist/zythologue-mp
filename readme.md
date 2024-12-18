# API Express TypeScript avec PostgreSQL

Ce projet est une API Node.js utilisant Express et TypeScript, avec une base de données PostgreSQL. Ce README fournit des instructions pour configurer et exécuter le projet localement.

## Prérequis

Avant de commencer, assurez-vous que vous avez installé les outils suivants sur votre machine :

-   [Node.js](https://nodejs.org/)
-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/)
-   [Git](https://git-scm.com/)

## Installation

### 1. Clonez le projet

Clonez ce repository sur votre machine locale en utilisant Git :

git clone https://github.com/Christophe-008/api-rest-ts-express-demo
cd api-express-typescript-postgresql

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

Les scripts SQL suivants sont utilisés pour créer la base de données et insérer des données de test.

### 1. Script de création des tables

-- Création de la table 'users'
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### 2. Script d'insertion de données de test

-- Insertion de données dans la table 'users'
INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.com');

### 3. Script de nettoyage des données

Si vous devez réinitialiser les tables (pour réinitialiser la base de données), vous pouvez utiliser ce script :

-- Suppression des données dans la table 'users'
DELETE FROM users;

## Problèmes courants

1. **Erreur de connexion à PostgreSQL** : Si vous avez des problèmes de connexion, vérifiez que votre base de données PostgreSQL fonctionne correctement dans Docker et que les variables d'environnement dans le fichier `.env` sont correctes.

2. **Erreur de compilation TypeScript** : Assurez-vous que vous avez installé toutes les dépendances de développement nécessaires avec `npm install` avant de lancer le projet.

## Contribution

Si vous souhaitez contribuer à ce projet, vous pouvez le forker et soumettre des pull requests avec vos améliorations ou corrections.

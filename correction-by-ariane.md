# Correction projet API - Morgan

Le 1er projet s'est lancé presque tout à fait jusqu'au bout, sauf au moment du NPM run dev où une erreur est apparu : 

``` 
⨯ Unable to compile TypeScript:
src/controllers/beers.ts(38,50): error TS2339: Property 'id_category' does not exist on type 'Beer'.
src/controllers/beers.ts(38,63): error TS2339: Property 'id_brewery' does not exist on type 'Beer'.
src/controllers/beers.ts(61,50): error TS2339: Property 'id_category' does not exist on type 'Partial<Beer>'.
src/controllers/beers.ts(61,63): error TS2339: Property 'id_brewery' does not exist on type 'Partial<Beer>'. 
```

Comme les controlleurs ne sont pas paramétrés pour brewery et category, Typescript ne peut pas les compiler. Il faut soit les créer, soit supprimer les id correspondants.

---
Attention à bien vérifier que les variables d'environnement du fichier ```.env``` soit les mêmes dans le fichier ```docker-compose.yml``` et sur le fichier ```config.ts```.

Pareil sur le fichier ```docker-compose.yml```, bien vérifier que les variables d'environnement de la database soit du même nom que la database (ici postgress) et que l'API dépende bien de la database "postgress".

---
Le fichier ```swagger.ts``` n'était pas au bon endroit, il faut le déplacer dans le dossier ```src```

---

Le port inscrit dans le dockerfile pour l'API est 3001:3001 mais le port écouté dans ```server.ts``` est le 3000. Il faut le modifier dans le ```docker-compose.yml``` pour qu'on puisse accéder à l'API

---

Dans les tables de la base de données, ne pas oublier le ; à la fin du CREATE TABLE

---

La documentation Swagger est bien implantée !

---

## Test des CRUD depuis Swagger

1. Beers

Get -> Error 404 (mais ça marche depuis l'url)
Post -> Error 500
Get/id -> Ca marche !
Put -> Error 500
Delete -> Ca marche !

2. Users

Get -> Error 404 (mais ça marche depuis l'url)
Post -> Error 500
Get/id -> Error 500
Put -> Error 500
Delete -> Error 500
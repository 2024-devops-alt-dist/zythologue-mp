SELECT 
    u1.id AS user1_id,
    u2.id AS user2_id,
    b.name AS beer_name
FROM 
    beer b
JOIN 
    favorite f1 ON b.id = f1.id_beer
JOIN 
    favorite f2 ON b.id = f2.id_beer
JOIN 
    users u1 ON f1.id_users = u1.id
JOIN 
    users u2 ON f2.id_users = u2.id
WHERE 
    f1.id_users = :user1_id -- Permet de chercher l'identifiant précis d'un utilisateur
    AND f2.id_users = :user2_id
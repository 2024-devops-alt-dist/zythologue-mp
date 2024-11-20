SELECT 
    u.first_name AS user_first_name,
    u.last_name AS user_last_name,
    COUNT(f.id_beer) AS beers_favorited
FROM 
    users u
LEFT JOIN 
    favorite f ON u.id = f.id_users
GROUP BY 
    u.first_name, u.last_name
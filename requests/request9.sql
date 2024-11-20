SELECT 
    b.name AS beer_name
FROM 
    beer b
LEFT JOIN 
    favorite f ON b.id = f.id_beer
WHERE 
    f.id IS NULL
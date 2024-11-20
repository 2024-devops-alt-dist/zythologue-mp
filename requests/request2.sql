SELECT 
    COUNT(b.id) as beer_number, id_category
FROM 
    beer b
GROUP BY
    b.id_category
SELECT 
    br.name AS brewery_name,
    AVG(r.rating) AS average_rating
FROM 
    brewery br
JOIN 
    beer b ON br.id = b.id_brewery
JOIN 
    review r ON b.id = r.id_beer
GROUP BY 
    br.id, br.name, br.country
HAVING 
    AVG(r.rating) >= 3
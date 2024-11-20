SELECT 
    br.name AS brewery_name,
    COUNT(b.id) AS beer_count
FROM 
    brewery br
JOIN 
    beer b ON br.id = b.id_brewery
GROUP BY 
    br.id, br.name
HAVING 
    COUNT(b.id) > 2 -- J'ai mis 2 au lieu de 5 car pas assez de bières en base
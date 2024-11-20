SELECT 
    b.name AS beer_name,
    br.name AS brewery_name,
    br.country AS brewery_country
FROM 
    beer b
JOIN 
    brewery br ON b.id_brewery = br.id
ORDER BY 
    br.country ASC, br.name ASC, b.name ASC;
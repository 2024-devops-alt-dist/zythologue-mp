SELECT 
    b.name AS beer_name,
    i.name AS ingredient_name,
    i.type AS ingredient_type
FROM 
    beer b
JOIN 
    beer_ingredient bi ON b.id = bi.id_beer
JOIN 
    ingredient i ON bi.id_ingredient = i.id

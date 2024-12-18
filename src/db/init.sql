
-- STRUCTURE --

CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null
);

CREATE TABLE IF NOT EXISTS beer (
    id serial primary key,
    name varchar(50) not null,
    description text not null,
    abv float not null,
    organic bool not null
);


-- DONNÉES --

INSERT INTO users (first_name, last_name, email, password) VALUES
('Alice', 'Smith', 'alice.smith@example.com', 'password123'),
('Bob', 'Brown', 'bob.brown@example.com', 'securepass'),
('Charlie', 'Davis', 'charlie.davis@example.com', 'letmein');

INSERT INTO beer (name, description, abv, organic) VALUES
('Hoppy Bliss', 'A bold and citrusy IPA.', 6.5, true),
('Golden Lager', 'A crisp and refreshing lager.', 4.8, false),
('Dark Dream', 'A rich and creamy stout.', 5.6, true),
('Pilsner Delight', 'A smooth and light pilsner.', 4.2, false),
('Tropical Paradise', 'A fruity IPA with hints of mango and passionfruit.', 6.0, true),
('Old Porter', 'A robust and smoky porter.', 5.8, false),
('Crisp Wheat', 'A light and refreshing wheat beer.', 4.5, true),
('Sunset Ale', 'A malty ale with caramel undertones.', 5.2, false),
('Dark Horizon', 'A bold stout with coffee and chocolate notes.', 7.0, true),
('Golden Wave', 'A smooth and creamy lager.', 5.0, false),
('Mango Dream', 'An exotic fruit beer with a tangy finish.', 4.7, true),
<<<<<<< HEAD
('Summer Pils', 'A crisp pilsner with herbal notes.', 4.3, false);
=======
('Summer Pils', 'A crisp pilsner with herbal notes.', 4.3, false)
>>>>>>> 68abff28c8e025d51c057648114cfcf88c1eee81

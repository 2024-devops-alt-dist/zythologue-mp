-- Insert users
INSERT INTO users (first_name, last_name, email, password)
VALUES
('John', 'Doe', 'john.doe@example.com', 'password123'),
('Jane', 'Smith', 'jane.smith@example.com', 'securepass'),
('Alice', 'Johnson', 'alice.johnson@example.com', 'alicepass'),
('Bob', 'Brown', 'bob.brown@example.com', 'bobbypass');

-- Insert breweries
INSERT INTO brewery (name, description, country)
VALUES
('Golden Brewery', 'A brewery known for its golden ales.', 'USA'),
('Frosty Beer Co.', 'Specializing in ice-cold lagers.', 'Canada'),
('Crafty Brews', 'Innovative craft beers.', 'UK'),
('Bavarian Classics', 'Traditional Bavarian beer.', 'Germany');
('Highland Hops', 'Fresh hoppy brews from the Scottish Highlands.', 'Scotland'),
('Sunset Brews', 'Beers inspired by warm sunsets.', 'Australia');

-- Insert categories
INSERT INTO category (name)
VALUES
('Ale'),
('Lager'),
('Stout'),
('IPA'),
('Pilsner');
('Sour'),
('Porter'),
('Wheat Beer');

-- Insert beers
INSERT INTO beer (name, description, abv, id_brewery, id_category)
VALUES
('Golden Ale', 'A smooth, malty ale with hints of caramel.', 5.2, 1, 1),
('Frosty Lager', 'Crisp and refreshing lager perfect for summer.', 4.5, 2, 1),
('Dark Stout', 'Rich and creamy stout with chocolate notes.', 6.0, 3, 3),
('Hoppy IPA', 'A bold IPA with strong citrus flavors.', 7.0, 4, 4);
('Tropical IPA', 'A fruity IPA with mango and passion fruit notes.', 6.5, 5, 4),
('Cherry Sour', 'A tart beer with a burst of cherry flavor.', 4.2, 3, 6),
('Classic Porter', 'Smooth, chocolatey porter with a hint of coffee.', 6.0, 5, 7),
('Wheat Bliss', 'A light, refreshing wheat beer perfect for summer.', 5.0, 3, 8),
('Sunset Lager', 'A crisp lager with a golden hue.', 4.8, 3, 2),
('Highland Ale', 'A bold ale with a malty backbone.', 5.8, 5, 1);

-- Insert favorites
INSERT INTO favorite (id_users, id_beer)
VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 3),
(1, 3);

-- Insert reviews
INSERT INTO review (content, rating, id_users, id_beer)
VALUES
('Amazing ale, very smooth!', 5, 1, 1),
('Crisp and refreshing.', 4, 2, 2),
('Too bitter for my taste.', 3, 3, 4),
('Rich and creamy, loved it.', 5, 4, 3),
('A decent lager, nothing special.', 3, 1, 2);

-- Insert photos
INSERT INTO photo (path, id_beer)
VALUES
('/images/golden_ale.jpg', 1),
('/images/frosty_lager.jpg', 2),
('/images/dark_stout.jpg', 3),
('/images/hoppy_ipa.jpg', 4);

-- Insert ingredients
INSERT INTO ingredient (name, type)
VALUES
('Barley', 'Grain'),
('Hops', 'Flavoring'),
('Yeast', 'Fermenter'),
('Water', 'Base'),
('Honey', 'Flavoring');

-- Insert beer_ingredients
INSERT INTO beer_ingredient (id_beer, id_ingredient)
VALUES
(1, 1), -- Golden Ale uses Barley
(1, 2), -- Golden Ale uses Hops
(1, 3), -- Golden Ale uses Yeast
(1, 4), -- Golden Ale uses Water
(2, 1), -- Frosty Lager uses Barley
(2, 2), -- Frosty Lager uses Hops
(2, 4), -- Frosty Lager uses Water
(3, 1), -- Dark Stout uses Barley
(3, 2), -- Dark Stout uses Hops
(3, 3), -- Dark Stout uses Yeast
(3, 4), -- Dark Stout uses Water
(4, 1), -- Hoppy IPA uses Barley
(4, 2), -- Hoppy IPA uses Hops
(4, 4), -- Hoppy IPA uses Water
(4, 5); -- Hoppy IPA uses Honey

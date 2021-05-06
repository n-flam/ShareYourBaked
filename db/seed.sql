-- USERS
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Simon', 'Gruber', '6002', 'Simon.Gruber@gmx.com', 'Simon123', 'Simon1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Bob', 'Thebuilder', '6008', 'Bob@gmx.com', 'Bob123', 'Bob1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('John', 'McLaine', '6245', 'John@gmx.com', 'John123', 'John1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Frank', 'Drabbin', '6001', 'Frank@gmx.com', 'Frank123', 'Frank1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('John', 'Rambo', '6025', 'John.Rambo@gmx.com', 'JohnR123', 'JohnR1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Evelyn', 'Salt', '6100', 'Evelyn@gmx.com', 'Evelyn123', 'Evelyn1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('James', 'Belushi', '6024', 'Belushi@gmx.com', 'Belushi123', 'Belushi1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Edard', 'Stark', '6325', 'Edard@gmx.com', 'Edard123', 'Edard1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Harry', 'Potter', '6354', 'Harry@gmx.com', 'Harry123', 'Harry1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Ron', 'Wesley', '6087', 'Ron@gmx.com', 'Ron123', 'Ron1234', now(), now());
INSERT INTO users (firstname, lastname, postcode, email, password, createdAt, updatedAt) VALUES ('Nadja', 'Flam', '6051', 'nadja.flam@gmx.net', 'NFlma', 'NFlma', now(), now());

-- Bakedgoods
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Plaetzchen', 'eggs, butter', '4', 'Vegitarien', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Cherry Cake', 'eggs', '5', 'GF', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Quiche', 'egg,', '4', 'GF', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Zimtschnecken', 'cinnamon', '5', 'Vegan', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Strosemmel', 'flour', '5', 'Vegan', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Scones', 'buter', '5', 'GF', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Bun', 'oil', '3', 'Vegitarien', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Wholemeal Bread', 'wholemeal', '3', 'Vegitarien', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Lemon Tart', 'Lemon', '3', 'DariFree', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Bugett', 'butter', '2', 'DariFree', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Creme Tart', 'creme', '2', 'GF', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Macaron', 'sugar', '5', 'GF', now(), now());
INSERT INTO bakedgoods (recipename, description, ingredience, pieces, nuts, glutenfree, vegan, vegetarian, dairyfree, halal, category, createdAt, updatedAt) VALUES ('Shortbread', 'flour', '5', 'NutFree', now(), now());


INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Cherry Cake', 'eggs', 10, 3, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Plaetzchen', 'eggs, butter', 8, 2, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Quiche', 'egg,', 12, 5, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Zimtschnecken', 'cinnamon', 87, 1, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Strosemmel', 'flour', 1, 2, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Scones', 'buter', 10, 4, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Bun', 'oil', 20, 5, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Wholemeal Bread', 'wholemeal', 4, 4, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Lemon Tart', 'Lemon', 5, 2, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Bugett', 'butter', 8, 4, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Creme Tart', 'creme', 4, 3, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Macaron', 'sugar', 8, 3, now(), now());
INSERT INTO bakedgoods (recipename, ingredience, pieces, category, createdAt, updatedAt) VALUES ('Shortbread', 'flour', 12, 2, now(), now());

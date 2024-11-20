create table users (
	id serial primary key,
	first_name varchar(50),
	last_name varchar(50),
	email varchar(100),
	password varchar(50)
);

create table brewery (
	id serial primary key,
	name varchar(50),
	description text not null,
	country varchar(50)
);

create table category (
	id serial primary key,
	name varchar(50)
);

create table beer (
	id serial primary key,
	name varchar(50),
	description text not null,
	abv float,
    id_brewery int,
	id_category int,
	constraint fk_brewery foreign key (id_brewery) references brewery(id),
	constraint fk_category foreign key (id_category) references category(id)	
);

create table favorite (
	id serial primary key,
	id_users int,
	id_beer int,
	constraint fk_user foreign key (id_users) references users(id),
	constraint fk_beer foreign key (id_beer) references beer(id)
);

create table review (
	id serial primary key,
	content varchar(50) not null,
	rating int not null,
	id_users int,
	id_beer int,
	constraint fk_user foreign key (id_users) references users(id),
	constraint fk_beer foreign key (id_beer) references beer(id)
);

create table photo (
	id serial primary key,
	path varchar(200),
	id_beer int,
	constraint fk_beer foreign key (id_beer) references beer(id)
);

create table ingredient (
	id serial primary key,
	name varchar(50),
	type varchar(50)
);

create table beer_ingredient (
	id serial primary key,
	id_beer int,
	id_ingredient int,
	constraint fk_beer foreign key (id_beer) references beer(id),
	constraint fk_ingredient foreign key (id_ingredient) references ingredient(id)
);
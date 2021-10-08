/* creacion de tabla de news */
CREATE TABLE news (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name_n VARCHAR(100) NOT NULL,
	route VARCHAR(200) NOT NULL,
	description text NOT NULL,
	link_n VARCHAR (100) NOT NULL
);
/* creacion de tabla de product */
CREATE TABLE products (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name_n VARCHAR(100) NOT NULL,
	route VARCHAR(200) NOT NULL,
	description text NOT NULL,
	price INT NOT NULL,
	link_n VARCHAR (100) NOT NULL
);	
/* creacion de tabla de users */
CREATE TABLE users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name_u VARCHAR(100) NOT NULL,
	email VARCHAR (50) NOT NULL,
	password PASSWORD  NOT NULL
);
/* creacion de tabla de orders */
CREATE TABLE orders (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	id_users BIGINT REFERENCES users (id),
	id_product BIGINT REFERENCES products (id),
	adress VARCHAR (150) NOT NULL,
	data DATA NOT NULL, 
	UNIQUE (id_users)
);
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger(
	id int NOT NULL AUTO_INCREMENT,
	burger_type varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


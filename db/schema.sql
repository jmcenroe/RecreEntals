DROP DATABASE IF EXISTS rentmystuff;

CREATE DATABASE rentmystuff;

USE rentmystuff;

CREATE TABLE users (
id INT(10) NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
name VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
creditcard INT(16) NOT NULL,
phone INT(10) NOT NULL,
qtyrented INT(10) NULL,
qtyforrent INT(10) NULL,
rating INT(5) NULL,
acctage INT(5) NOT NULL
PRIMARY KEY(id)
);

CREATE TABLE products (
id INT(10) NOT NULL AUTO_INCREMENT,
productsname VARCHAR(30) NOT NULL,
price INT(10) NOT NULL,
available BOOLEAN NOT NULL,
PRIMARY KEY(id)
);








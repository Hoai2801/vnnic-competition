create database vnnic;

use vnnic;

CREATE TABLE Category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE Blog (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category_id INT,
  excerpt TEXT,
  slug VARCHAR(255) UNIQUE NOT NULL,
  date DATE,
  coverImage VARCHAR(255),
  content TEXT,
  FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE SET NULL
);


create table user(
	id bigint primary key auto_increment,
    username varchar(100) not null,
    mail varchar(100) not null,
    password varchar(100) not null
);

create table banner(
	id bigint primary key auto_increment,
    thumnail varchar(500) not null,
    url varchar(500) not null
);



create database vnnic;

use vnnic;

create table category(
	id int primary key auto_increment,
    name varchar(100) not null
);

create table blog(
	id bigint primary key auto_increment,
    title varchar(1000) not null,
    content longtext not null,
    category int not null,
    created_at datetime not null
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



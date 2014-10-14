CREATE DATABASE cagematch;

USE chat;

CREATE TABLE movies (
  imdbId varchar(10),
  title varchar(100),
  score integer(5),
  imgUrl varchar(200)
);

CREATE TABLE matchups (
  matchupId integer(10),
  winner varchar(100),
  winnerInitial integer(10),
  winnerFinal integer(10),
  loserInitial integer(10),
  loserFinal integer(10),
  loser varchar(100)
);

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/





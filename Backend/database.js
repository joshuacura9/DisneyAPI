let sqlite3 = require('sqlite3');

let database = new sqlite3.Database('./database.db');


const createTableMoviesQuery = "CREATE TABLE IF NOT EXISTS movies (title TEXT, director TEXT, image TEXT, release_date TEXT)";

const createTableCharactersQuery = "CREATE TABLE IF NOT EXISTS characters (name TEXT)"

const createTableLocationsQuery = "CREATE TABLE IF NOT EXISTS locations (name TEXT)"

const createTableMoviesCharactersQuery = "CREATE TABLE IF NOT EXISTS movies_characters (movie_id INTEGER, character_id INTEGER)"


database.run(createTableMoviesQuery, error => {
    if (error) {
        console.log("Create movies table failed", error);
    }
    else {
        console.log("Create movies table succeeded");
    }
});
database.run(createTableCharactersQuery, error => {
    if (error) {
        console.log("Create characters table failed", error);
    }
    else {
        console.log("Create characters table succeeded");
    }
});
database.run(createTableLocationsQuery, error => {
    if (error) {
        console.log("Create locations table failed", error);
    }
    else {
        console.log("Create locations table succeeded");
    }
});
database.run(createTableMoviesCharactersQuery, error => {
    if (error) {
        console.log("Create join table failed", error);
    }
    else {
        console.log("Create join table succeeded");
    }
});

module.exports = database;



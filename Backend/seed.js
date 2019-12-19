// require our database module
const db = require('./database.js');

// starter data
const characters_list = [
{ name: "Anna" },
{ name: "Elsa" },
{ name: "Ralph" },
{ name: "Vanellope" },
{ name: "Buzz Lightyear" },
{ name: "Mickey Mouse" },
{ name: "Baymax" },
{ name: "Hiro Hamada" },
{ name: "Tadashi Hamada" },
{ name: "Mr.Fredricksen" },
{ name: "Russell" },
{ name: "Moana" },
{ name: "Maui" },
{ name: "Simba" },
{ name: "Mufasa" },
{ name: "Scar" },
{ name: "Woody" },
{ name: "Mr. Potato Head" },
{ name: "Rex" },
{ name: "Stormtrooper" },
{ name: "Yoda" },
{ name: "Chewbacca" },
{ name: "Goofy" },
{ name: "Max" },
{ name: "Ironman" },
{ name: "Thor" },
{ name: "Captain America" },
{ name: "Thanos" }
];

const locations_list = [
{ name: "Arendelle" },
{ name: "Internet" },
{ name: "San Fransokyo" },
{ name: "Paradise Falls" },
{ name: "Tahiti" },
{ name: "Kenya" },
{ name: "Galaxy" },
{ name: "Earth" }
];

const movies_list = [
  {
    title: "Frozen",
    director: "Chris Buck",
    image: "./images/frozen.jpg",
    release_date: "November 27, 2013"
  },
  {
    title: "Ralph Breaks the Internet",
    director: "Phil Johnson",
    image: "./images/ralphbreaks.jpg",
    release_date: "November 21, 2018"
  },
  {
    title: "Big Hero 6",
    director: "Don Hall",
    image: "./images/bighero.jpg",
    release_date: "November 7, 2014"
      
  },
  {
    title: "Up",
    director: "Pete Docter",
    image: "./images/up.jpg",
    release_date: "May 29, 2009"
  },
  {
    title: "Moana",
    director: "Ron Clements",
    image: "./images/moana.jpg",
    release_date: "November 23, 2016"
  },
  {
    title: "Lion King",
    director: "Roger Allers",
    image: "./images/lionking.jpg",
    release_date: "June 24, 1994"
  },
  {
    title: "Toy Story",
    director: "John Lasseter",
    image: "./images/toystory.jpg",
    release_date: "November 22, 1995"
  },
  {
    title: "A Goofy Movie",
    director: "Kevin Lima",
    image: "./images/goofy.jpg",
    release_date: "April 7, 1995"
     
  },
  {
    title: "Avengers: End Game",
    director: "Anthony Russo",
    image: "./images/avengers.jpg",
    release_date: "April 26, 2019"
      
  },
  {
    title: "Ironman",
    director: "Anthony Russo",
    image: "./images/ironman.jpg",
    release_date: "May 2, 2008"
      
  },
  {
    title: "Star Wars: Episode III -Revenge of the Sith",
    director: "George Lucas",
    image: "./images/star.jpg",
    release_date: "May 19, 2005"
  }
];

const deleteMovies = 'DELETE FROM movies';
const deleteCharacters = 'DELETE FROM characters';
const deleteLocations = 'DELETE FROM locations';
const insertIntoCharacters = 'INSERT INTO characters (name) VALUES (?)';
const insertIntoMovies = 'INSERT INTO movies (title, director, image, release_date) VALUES (?, ?, ?, ?)';
const insertIntoLocations = 'INSERT INTO locations (name) VALUES (?)';


db.run(deleteCharacters, error => {
  if (error) console.log(new Error('Could not delete characters'), error);
  else {
    characters_list.forEach(character => {
      db.run(insertIntoCharacters, [character.name], error => {
        if (error) console.log(new Error('Could not add characters'), error);
        else {
          console.log(`${character.name} successfully added to the database!`);
        }
      });
    });
    db.run(deleteMovies, error => {
      if (error) console.log(new Error('Could not delete movies'), error);
      else {
        movies_list.forEach(movie => {
          db.run(insertIntoMovies, [movie.title, movie.director, movie.image, movie.release_date], error => {
            if (error) console.log(new Error('Could not add movies'), error);
            else {
              console.log(`${movie.title} successfully added to the database!`);
            }
          });
        });
        db.run(deleteLocations, error => {
          if (error) console.log(new Error('Could not delete locations'), error);
          else {
            locations_list.forEach(loc => {
              db.run(insertIntoLocations, [loc.name], error => {
                if (error) console.log(new Error('Could not add location'), error);
                else {
                  console.log(`${loc.name} successfully added to the database!`);
                }
              });
            });
          }
        });
      }
    });
  }
});


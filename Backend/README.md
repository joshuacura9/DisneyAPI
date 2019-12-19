#Disney+ API


##Description 
>My API is designed to display information that a user could use to see what information is located in the Disney+ database. The user will be able to find a list of movies, different characters and also a list of locations.  


GET all MOVIES
GET TARGET localhost:3000/api/movies
Example
```
[
  {
        "title": "Lion King",
        "director": "Roger Allers",
        "image": "lionking.jpg",
        "release_date": "June 24, 1994"
    },
    {
        "title": "Toy Story",
        "director": "John Lasseter",
        "image": "toystory.jpg",
        "release_date": "November 22, 1995"
    }
]
```
GET all characters
GET TARGET localhost:3000/api/characters
Example
```
[
    {
        "name": "Mickey Mouse"
    },
    {
        "name": "Baymax"
    }
]
```
GET all locations 
GET TARGET localhost:3000/api/characters 
Example 
```
[
    {
        "name": "Arendelle"
    },
    {
        "name": "Internet"
    }
]
```
GET ONE MOVIE BY ID
GET TARGET localhost:3000/api/movies/:id
Example 
```
[
    {
        "title": "Lion King",
        "director": "Roger Allers",
        "image": "lionking.jpg",
        "release_date": "June 24, 1994"
    }
]
```
GET ONE LOCATION BY ID 
GET TARGET localhost:3000/api/locations/:id
Example
```
[
    {
        "name": "Arendelle"
    }
]
```
GET ONE CHARACTER BY ID
GET TARGET localhost:3000/api/characters/:id
Example 
```
[
    {
        "name": "Mickey Mouse"
    }
]
```
CREATE MOVIE
POST TARGET localhost:3000/api/movies
Example 
```
{
  "title": "Toy Story 2",
  "director": "John Lasseter",
  "image": "noimage",
  "release_date": "blank"
}
```
CREATE CHARACTER 
POST TARGET localhost:3000/api/characters
Example
```
{
  "name": "Black Panther"
}
```
CREATE LOCATIONS
POST TARGET localhost:3000/api/locations
Example
```
{
  "name": "A Galaxy Far Far Away"
}
```
UPDATE MOVIE
PUT TARGET localhost:3000/api/movies/:id
Example
```
{
  "title": "Toy Story 3"
}
```
UPDATE CHARACTER 
PUT TARGET localhost:3000/api/characters/:id
Example
```
{
  "title": "Spiderman"
}
```
UPDATE LOCATION
PUT TARGET localhost:3000/api/locations/:id
Example
```
{
  "title": "A Galaxy REALLY far away"
}
```
DELETE MOVIE 
DELETE localhost:3000/api/movies/:id

DELETE CHARACTER
DELETE localhost:3000/api/character/:id

DELETE LOCATIONS 
DELETE localhost:3000/api/locations/:id

GET ALL MOVIES_CHARACTERS TABLE
GET TARGET localhost:3000/api/movies_characters
Example 
```
[
    {
        "movie_id": 1,
        "character_id": 9
    },
    {
        "movie_id": 1,
        "character_id": 10
    }
]
```
GET A MOVIE'S CHARACTERS USING MOVIE ID 
GET TARGET localhost:3000/api/movies/:id/characters
Example 
```
[
    {
        "movie_id": 1,
        "character_id": 9
    },
    {
        "movie_id": 1,
        "character_id": 10
    },
    {
        "movie_id": 1,
        "character_id": 11
    }
]
```
CREATING A NEW ASSOCIATION BETWEEN MOVIE AND CHARACTER USING MOVIE ID 
POST TARGET localhost:3000/api/movies/:id/characters
Example 
```
{
  "character_id": 29
}
```


##Technologies Used
>Express
>SQLlite3
>Node 


##Next Steps
>Finish front end that will allow users to retrieve information via a search bar that displays results afterward. Also add on some more data entities as well as add on to the existing ones.

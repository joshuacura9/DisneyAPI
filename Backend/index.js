// Require statements
let express = require('express');
let database = require('./database.js');
let app = express();


// Middleware
app.use(express.json());

let setCORS = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE")
  next()
}
app.use(setCORS)


// Configuration Variables
const port = 5000;


// ROUTES
app.get('/', (request, response) => {
  response.send('Visit to see disney plus movies');
});
/////////////////////
/////MOVIE ROUTES////
/////////////////////

// GET ALL MOVIES
app.get('/api/movies',  (req, res) => {
  // SEND ALL AS JSON RESPONSE
  const getAllMovies = "SELECT oid, title FROM movies";

  database.all(getAllMovies, (error, results) => {
    if (error) {
      console.log(new Error('Could not get all movies'), error);
      res.sendStatus(500);
    }
    res.status(200).json(results);
  });
});


// GET ONE MOVIE
app.get('/api/movies/:id',  (req, res) => {
  // FIND ONE MOVIE by its id
  let movieId = req.params.id;
  const getOneMovie = `SELECT * FROM movies WHERE movies.oid = ${movieId}`
  database.all(getOneMovie, (error, result) => {
    if (error) {
      console.log("Could not get movie by ID.")
      res.sendStatus(500)
    } else {
      res.status(200).json(result)
    }
  })
});


// CREATE A NEW MOVIE
app.post('/api/movies',  (req, res) => {
  console.log(req.body)
  // create new book with data (`req.body`)
  let createNewMovie = `INSERT into movies VALUES (?, ?, ?, ?)`
  let reqBody = [req.body.title, req.body.director, req.body.image, req.body.release_date];

  database.run(createNewMovie, reqBody, (error, result) => {
    if (error) {
      console.log("Error inserting new movie", error)
    } else {
      res.status(200).json(result);
      console.log (`Added a new movie $ {req.body.title}`)
    }
  });
});


// UPDATE MOVIE
app.put('/api/movies/:id', (req,res) => {
  // get book id from url params (`req.params`)
  const movieId = parseInt(req.params.id);

  // Use the keys in req.body to create dynamic SET values for the query string
  const queryHelper = Object.keys(req.body).map(ele => `${ ele.toUpperCase() } = ?`);

  // Use the dynamic SET values in from queryHelper to build full UPDATE string
  const updateOneMovie = `UPDATE movies SET ${queryHelper.join(', ')} WHERE movies.oid = ?`;

  // Add values from req.body and the bookId to an array for use in database.run()
  const queryValues = [...Object.values(req.body), movieId];


  database.run(updateOneMovie, queryValues, function (error) {
    if (error) {
      console.log(new Error('Could not update movie'), error);
      res.sendStatus(500);
    } else {
      console.log(`Movie with ID ${movieId} was updated successfully`);
      
      // SEND ALL AS JSON RESPONSE
      const getAllMovies = "SELECT oid, title FROM movies";

      database.all(getAllMovies, (error, results) => {
        if (error) {
          console.log(new Error('Could not get all movies'), error);
          res.sendStatus(500);
        }
        res.status(200).json(results);
      });
    }
  });
});


// DELETE MOVIE
app.delete('/api/movies/:id',  (req, res) => {
  // get movie id from url params (`req.params`)
  let deleteById = `DELETE FROM movies WHERE movies.oid = ?`
  let movieId = req.params.id; 

  database.run(deleteById, movieId, (error) => {
    if (error) {
      res.sendStatus(500);
      console.log("Could not delete Movie", error);
    }
    else {
      console.log("movie deleted")
      res.sendStatus(200);
    }
  })
});


////////////////////
//LOCATIONS ROUTES//
////////////////////

//GET ALL LOCATIONS 
app.get('/api/locations', (req,res) => {
  //SEND ALL LOCATIONS AS JSON RESPONSE 
  const getAllLocations = "SELECT * FROM locations";

  database.all(getAllLocations, (error, results) => {
    if (error) {
      console.log(new Error ('Could not retrieve locations'), error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})



//GET ONE LOCATION 
app.get('/api/locations/:id',  (req, res) => {
  // find one book by its id
  let locationId = req.params.id;
  const getOneLocation = `SELECT * FROM locations WHERE locations.oid = ${locationId}`
  database.all(getOneLocation, (error, result) => {
    if(error) console.log("error", error);
    else {
      res.status(200).json(result);
    }
  });  
});



//CREATE A NEW LOCATION 
app.post('/api/locations',  (req, res) => {
  // create new book with data (`req.body`)
  let createNewLocation = `INSERT INTO locations VALUES (?)`
  let reqBody = [req.body.name];
  database.run(createNewLocation, reqBody, (error, result)=> {
    if(error) console.log("error making new location", error);
    else {
      res.status(200).json(result);
      console.log("Created a new location");
    }
  });
});



//UPDATE A NEW LOCATION 
app.put('/api/locations/:id', (req,res) => {
  // get book id from url params (`req.params`)
  const locationId = parseInt(req.params.id);

  // Use the keys in req.body to create dynamic SET values for the query string
  const queryHelper = Object.keys(req.body).map(ele => `${ ele.toUpperCase() } = ?`);

  // Use the dynamic SET values in from queryHelper to build full UPDATE string
  const updateOneLocation = `UPDATE locations SET ${queryHelper.join(', ')} WHERE locations.oid = ?`;

  // Add values from req.body and the bookId to an array for use in database.run()
  const queryValues = [...Object.values(req.body), locationId];


  database.run(updateOneLocation, queryValues, function (error) {
    if (error) {
      console.log(new Error('Could not update location'), error);
      res.sendStatus(500);
    } else {
      console.log(`Location with ID ${locationId} was updated successfully`);
      res.sendStatus(200);
    }
  });
});


//DELETE A LOCATION 
app.delete('/api/locations/:id',  (req, res) => {
  // get book id from url params (`req.params`)
  let deleteById = `DELETE FROM locations WHERE locations.oid = ?`
  let locationId = req.params.id;

  database.run(deleteById, locationId, (error) => {
    if(error) {
      res.sendStatus(500);
      console.log("Could not delete location", error);
    }
    else {
      console.log("location deleted")
      res.sendStatus(200);
    }
  });
});


/////////////////////
//CHARACTERS ROUTES//
/////////////////////

//GET ALL CHARACTERS 
app.get('/api/characters', (req,res) => {
  //SEND ALL characters AS JSON RESPONSE 
  const getAllCharacters = "SELECT * FROM characters";

  database.all(getAllCharacters, (error, results) => {
    if (error) {
      console.log(new Error ('Could not retrieve characters'), error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})


//GET ONE CHARACTER 
app.get('/api/characters/:id',  (req, res) => {
  // find one book by its id
  let characterId = req.params.id;
  const getOneCharacter = `SELECT * FROM characters WHERE characters.oid = ${characterId}`
  database.all(getOneCharacter, (error, result) => {
    if(error) console.log("error", error);
    else {
      res.status(200).json(result);
    }
  });  
});


//CREATE NEW CHARACTER
app.post('/api/characters',  (req, res) => {
  // create new character with data (`req.body`)
  let createNewCharacter = `INSERT INTO characters VALUES (?)`
  let reqBody = [req.body.name];
  database.run(createNewCharacter, reqBody, (error, result) => {
    if(error) console.log("error making new character", error);
    else {
      res.status(200).json(result);
      console.log("Created a new character");
    }
  });
});



//UPDATE NEW CHARACTER
app.put('/api/characters/:id', (req,res) => {
  // get book id from url params (`req.params`)
  const characterId = parseInt(req.params.id);

  // Use the keys in req.body to create dynamic SET values for the query string
  const queryHelper = Object.keys(req.body).map(ele => `${ ele.toUpperCase() } = ?`);

  // Use the dynamic SET values in from queryHelper to build full UPDATE string
  const updateOneCharacter = `UPDATE characters SET ${queryHelper.join(', ')} WHERE characters.oid = ?`;

  // Add values from req.body and the bookId to an array for use in database.run()
  const queryValues = [...Object.values(req.body), characterId];


  database.run(updateOneCharacter, queryValues, function (error) {
    if (error) {
      console.log(new Error('Could not update character'), error);
      res.sendStatus(500);
    } else {
      console.log(`Character with ID ${characterId} was updated successfully`);
      res.sendStatus(200);
    }
  });
});



//DELETE Character
app.delete('/api/characters/:id',  (req, res) => {
  // get character id from url params (`req.params`)
  let deleteById = `DELETE FROM characters WHERE characters.oid = ?`
  let characterId = req.params.id;

  database.run(deleteById, characterId, (error) => {
    if(error) {
      res.sendStatus(500);
      console.log("Could not delete Character", error);
    }
    else {
      console.log("Character deleted")
      res.sendStatus(200);
    }
  });
});

///////////////////////////////////////////
//JOIN TABLE ROUTES CHARACTERS AND MOVIES//
///////////////////////////////////////////

//GET ALL MOVIES_CHARACTERS TABLE
app.get('/api/movies_characters', (req, res) => {
  const queryString = `SELECT * FROM movies_characters`

  database.all(queryString, (error, results) => {
    if (error) {
      console.log(`Could not get movies_characters table.`)
      res.sendStatus(500)
    } else {

      res.status(200).json(results)
    }
  })
})


//FIXED SQL STATEMENT
//GET A MOVIE'S CHARACTERS USING MOVIE ID
app.get('/api/movies/:id/characters', (req, res) => {
  const movieId = req.params.id;
  const queryString = `
  SELECT movies.title AS Title, characters.name AS Name
  FROM movies JOIN movies_characters ON
  movies.oid = movies_characters.movie_id
  JOIN characters ON 
  characters.oid = movies_characters.character_id
  WHERE movies.oid = (?);`

  database.all(queryString, [movieId], (error, results) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results)
    }
  })
})





//CREATING A NEW ASSOCIATION BETWEEN A MOVIE AND 
//CHARACTER USING MOVIE ID

app.post('/api/movies/:id/characters', (req, res) => {
  const movieId = req.params.id;  
  const characterId = req.body.character_id;
  const insertString = "INSERT INTO movies_characters VALUES (?, ?)";

  database.run(insertString, [movieId, characterId], error => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.sendStatus(200)
    }
  })
})

//DELETE  MOVIE CHARACTER ASSOCIATION 
app.delete('/api/movies_characters/:movieID', (req, res) => {
  const queryInsertion = [req.params.movieID]
  const queryString = 'DELETE FROM movies_characters WHERE movies_characters.oid = ?'

  database.run (queryString, queryInsertion, error => {
    if (error) res.sendStatus(500)
    else res.sendStatus(200)
  })
})



// Start Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


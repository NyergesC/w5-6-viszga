let incomingData = {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  }


function getTheFirstGenre(myMovie){    //incomingData a fuggvenyben myMovie neven mukodik
    return myMovie.genre[0]

}
console.log(getTheFirstGenre(incomingData))

//-----ARRAY FUNCTION-----//

const getTheFirstGenre = myMovie => myMovie.genre[0]



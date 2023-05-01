const fs = require('fs')
const path = require('path')
let movie = {
    movie_Name: "Citadel",
    crew: "PC, hero name dontknow"
}

fs.writeFile(path.join(__dirname, "movies", "actMovies", "movie.json`"), JSON.stringify(movie), (err) => {
    if (err) throw err
    console.log("Done")
})
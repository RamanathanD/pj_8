import React from 'react'

function Movie() {

    let searchMovies= async () => {
        
        
	// user can enter your movie name  
		if(document.getElementById('movie').value === "")
		{
			alert("Enter movie name to search");
			document.getElementById('movie').focus();
			return;
		}
		
		var apikey = "ac5a571b";
		
		var searchTerm = document.getElementById('movie').value;
		
		//https://www.omdbapi.com/?apikey=ac5a571b&t=abilla
		var url = "http://www.omdbapi.com/?apikey=" + apikey + "&t=" + searchTerm;
		
		const response = await fetch(url);
		
		// console.log(response.status);
		// console.log(response.statusText);
		
		const data = await response.json();
		
		console.log(data);
		
		let Result = document.getElementById('result');
 //  with data 
		if (data != null) {
					console.log(true)	
		
			Result.innerHTML = '';			
			// <div>
			const movieElement = document.createElement('div');
			// <div class="movie"></div>
			movieElement.classList.add('movie');
			
			movieElement.innerHTML = `
			    <br>
				<img style="float:center" className="img-thumnail" width="300" height="250" src="${data.Poster}">
				<h2>${data.Title}</h2>
				<h4>${data.Writer}</h4>
				<h4>${data.Runtime}</h4>
				<h4>${data.Genre}</h4>
				<h4>${data.Director}</h4>
				<h4>${data.imdbRating}</h4>
			`;				
			
			Result.appendChild(movieElement);
							
		} else {
			console.log(false)	
			Result.innerHTML = ' No results found';
		}
	}


  return (
    <div>
       <div className="container">
        <h1 className="text-center mt-5 bg-danger p-3">Book My Show !</h1>
        <form id="movieForm" autoComplete="off">
            <div className="form-group">
                  <label htmlFor="movie">Movie name</label>
                <input className="form-control" type="text" id="movie" placeholder="Search movie..."/>
            </div>
            <div className="form-group text-center mt-2">
                <button type="button" className="btn btn-success btn-block" onClick={searchMovies}>Search Movie</button>
            </div>
        </form>
        <div id="result"></div>
    </div>
    </div>
  )
}

export default Movie

function searchMovies(movie) {
    $('#title').empty();
    $('#description').empty();
    $('#imdb').empty();
    $("#my_image").empty();

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://www.omdbapi.com/?t=" + movie + "&apikey=1993e977",
        "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        $('#title').append(response.Title + "(" + response.Year + ")");
        $("#my_image").attr("src", response.Poster);
        $('#description').append(response.Plot);
        $('#imdb').append("IMDB: " + response.imdbRating);
    });

}
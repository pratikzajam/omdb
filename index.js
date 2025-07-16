





getSearchData = async (e) => {
    e.preventDefault()
    let searchValue = document.getElementById("search").value;
    let type = document.getElementById("type").value;




    try {

        let MoviesData = await fetch(`http://www.omdbapi.com/?apikey=af06f1f1&s=${searchValue}&type=${type}`)

        let result = await MoviesData.json();


        appendList(result.Search)


    } catch (error) {
        console.log(error)
    }


}

let handleSort = (result) => {

    let sortValue = document.getElementById("sort").value;
    

    if (sortValue == "asc") {
        sortedResult = result.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
    } else {
        sortedResult = result.sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
    }



    appendList(sortedResult)


}


appendList = async (search) => {

    let movieContainer = document.getElementById("movieCards");

    movieContainer.innerHTML = ""



    if (!search) {

        return movieContainer.innerHTML = `<img height="500px" width="500px" src="404.jpg">`;
    }


    search.map((movie) => {



        let card = document.createElement("div");
        card.class = "movie"

        card.innerHTML = `<div >
        <img src=${movie.Poster}>
        <div>${movie.Title}</div>
        </div>`





        movieContainer.append(card)




    })



}
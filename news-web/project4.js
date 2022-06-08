
$(document).ready(function() {
    fetch('https://gnews.io/api/v4/top-headlines?&token=8e2ae8f874c7f43c5f1fc818ad9cf8c8')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { 
        console.log(data);
        const titles = data.articles.map(
            title => 
            '<div class = "wrapper"> <div class = "image"> <img src = "'  + title.image + '" style = "width:300px"> </div>' 
            + '<div class = "text"> <a href = "' + title.url + '" target = "_blank">' + title.title + '</a>'
            + '<p>' + title.publishedAt + '</p>'
            + '<p>' + title.content + '</p> </div> </div>'
            )
        document
        .getElementById("main")
        .innerHTML = titles;
    });
    
    $("#myTrigger").click(function() {
        $('#myModal').css("display", "block");
    })
    $(".close").click(function() {
        $('#myModal').hide();
    })
    $("#mySearch").click(function() {
        $('#myModal').hide();
        $('#main').remove();
        let searchVal = $('#search').val();
        fetch('https://gnews.io/api/v4/search?q=' + searchVal + '&token=8e2ae8f874c7f43c5f1fc818ad9cf8c8')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const titles = data.articles.map(
            title => 
            '<div class = "wrapper"> <div class = "image"> <img src = "'  + title.image + '" style = "width:300px"> </div>' 
            + '<div class = "text"> <a href = "' + title.content + '" target ="_blank" rel="noopener noreferrer">' + title.title + '</a>'
            + '<p>' + title.publishedAt + '</p>'
            + '<p>' + title.content + '</p> </div> </div>'
            )
        document
        .getElementById("match-list")
        .innerHTML = titles; 
    });
    })
})
   
//API URL: http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=2bc5ae895e6c7083ea7c6d18953a2887&format=json


function showtopArtist(){
  var myURL="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=2bc5ae895e6c7083ea7c6d18953a2887&format=json";
    $("#mydiv").empty();
    $.getJSON(myURL, function (data) {
  // console.log("hi");
   document.getElementById("myheader").innerHTML = "Top 10 Artists";
   var thediv = document.getElementById("mydiv");
   for(var i=0; i<10; i++){
       //console.log(data.artists.artist[i].image[3]["#text"]);
       var tempdiv=document.createElement('div');
       tempdiv.className="card";
       tempdiv.style.width="18rem";

       var myh1=document.createElement('h1');
       myh1.innerHTML= i+1;
       myh1.style.color = "#D3D3D3";
       myh1.style.textShadow="2px 2px 5px #46434B";

       var innerdiv=document.createElement('div');
       innerdiv.className = "card-body";
       innerdiv.style.boxShadow = "10px 10px 5px #46434B";

       var myh3=document.createElement('h3');
       myh3.className="card-title";
       myh3.innerHTML=  data.artists.artist[i].name;
       myh3.style.fontFamily="Gill Sans";
      

       var p1 = document.createElement('p');
       p1.className="card-text";
       p1.style.fontFamily="American Typewriter";
       p1.innerHTML = "Playcount:"+data.artists.artist[i].playcount;
      

       var p2 = document.createElement('p');
       p2.className="card-text";
       p2.style.fontFamily="American Typewriter";
       p2.innerHTML = "Listeners:"+data.artists.artist[i].listeners;
       

       innerdiv.appendChild(myh1);
       innerdiv.appendChild(myh3);
       innerdiv.appendChild(p1);
       innerdiv.appendChild(p2);
       tempdiv.appendChild(innerdiv);
        thediv.appendChild(tempdiv);
       
   }
  
  });
}

function showTopTracks(){ 
  var myURL="http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=2bc5ae895e6c7083ea7c6d18953a2887&format=json";
  $("#mydiv").empty();
    document.getElementById("myheader").innerHTML = "Top 10 Tracks";
    var thediv = document.getElementById("mydiv");
    $.getJSON(myURL, function(data) {
      for (var i = 0 ; i < 10 ; i++){
        var tempdiv = document.createElement('div');
        tempdiv.className = "card";
        tempdiv.style.width = "18rem";

        var myh1 = document.createElement('h1');
        myh1.innerHTML = i + 1;
        myh1.style.color = "#D3D3D3";
        myh1.style.textShadow="2px 2px 5px #46434B";

        var innerdiv = document.createElement('div');
        innerdiv.className = "card-body";
        innerdiv.style.boxShadow = "10px 10px 5px #46434B";

        var myh3 = document.createElement('h3');
        myh3.className= "card-title";
        myh3.innerHTML = data.tracks.track[i].name;
        myh3.style.fontFamily = "Gill Sans";
        myh3.style.fontWeight = "bold";

        var p1 = document.createElement('p');
        p1.className = "card-text";
        p1.innerHTML = "Artist Name:" +data.tracks.track[i].artist.name;
        p1.style.fontFamily="American Typewriter";
        //p1.style.fontWeight="bold";

        var p2 = document.createElement('p');
        p2.className = "card-text";
        p2.innerHTML = "Play count:" +data.tracks.track[i].playcount;
        p2.style.fontFamily="American Typewriter";
        //p2.style.fontWeight="bold";
        

        innerdiv.appendChild(myh1);
        innerdiv.appendChild(myh3);
        innerdiv.appendChild(p1);
        innerdiv.appendChild(p2);
        tempdiv.appendChild(innerdiv);
        thediv.appendChild(tempdiv);



        
      }



    });
  }
function showTopTags(){ 
  var myURL="http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=2bc5ae895e6c7083ea7c6d18953a2887&format=json";
    $("#mydiv").empty();
    document.getElementById("myheader").innerHTML = "Top 10 Tags";
    var thediv = document.getElementById("mydiv");
    $.getJSON(myURL, function (data) {
   
        for (var i = 0; i < 10; i++){
            //console.log(data.tags.tag[1].name);
            var tempdiv = document.createElement('div');
            tempdiv.className = "card";
            tempdiv.style.width = "18rem";

            var myh1 = document.createElement('h1');
            myh1.innerHTML = i + 1;
            myh1.style.color = "#D3D3D3";
            myh1.style.textShadow="2px 2px 5px #46434B";

            var innerdiv = document.createElement('div');
            innerdiv.className = "card-body";
            innerdiv.style.boxShadow = "10px 10px 5px #46434B";

            var myh3 = document.createElement('h3');
            myh3.className = "card-title";
            myh3.innerHTML = data.tags.tag[i].name;
            myh3.style.fontFamily = "Gill Sans";
            myh3.style.fontWeight = "bold";

            var p1 = document.createElement('p');
            p1.className = "card-text";
            p1.style.fontFamily = "American Typewriter";
            //p1.style.fontWeight="bold";
            p1.innerHTML = "Taggings: " + data.tags.tag[i].taggings;
            
            var p2 = document.createElement('p');
            p2.className = "card-text";
            p2.style.fontFamily="American Typewriter";
            //p2.style.fontWeight="bold";
            p2.innerHTML = "Reach: "  + data.tags.tag[i].reach;

            innerdiv.appendChild(myh1);
            innerdiv.appendChild(myh3);
            innerdiv.appendChild(p1);
            innerdiv.appendChild(p2);
            tempdiv.appendChild(innerdiv);
            thediv.appendChild(tempdiv);
      }
      
  });
}



function searchAlbum() {
    var myURL = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=2bc5ae895e6c7083ea7c6d18953a2887&format=json";
    var temp1 = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=";
    var temp2 = document.getElementById("inputbox").value;
    var temp3 = "&api_key=2bc5ae895e6c7083ea7c6d18953a2887&format=json";
    var temp = temp1 + temp2 + temp3;
    $("#mydiv").empty();
    document.getElementById("myheader").innerHTML = "Search Result";
    var thediv = document.getElementById("mydiv");
    $.getJSON(temp, function (data) {
        for (var i = 0; i < 10; i++) {
            //console.log(data.results.albummatches.album[i].name);
            //console.log(data.results.albummatches.album[1].image[3]["#text"]);
            var image = document.createElement('img');
            image.className = "card - img - top";
            image.src= data.results.albummatches.album[i].image[3]["#text"];
            var tempdiv = document.createElement('div');
            tempdiv.className = "card";
            tempdiv.style.width = "18rem";
           

            var myh1 = document.createElement('h1');
            myh1.innerHTML = i + 1;
            myh1.style.color = "#D3D3D3";
            myh1.style.textShadow="2px 2px 5px #46434B";
            var innerdiv = document.createElement('div');
            innerdiv.className = "card-body";
            //innerdiv.style.boxShadow = "10px 10px 5px #000099";
            var myh5 = document.createElement('h3');
            myh5.className = "card-title";
            myh5.innerHTML = data.results.albummatches.album[i].name;
            myh5.style.fontFamily = "Gill Sans";
            myh5.style.fontWeight = "bold";
            var p1 = document.createElement('p');
            p1.className = "card-text";
            //p1.style.fontWeight = "bold";
            p1.style.fontFamily = "American Typewriter";
            p1.innerHTML ="Artist: " + data.results.albummatches.album[i].artist;
            innerdiv.appendChild(myh1);
            innerdiv.appendChild(myh5);
            innerdiv.appendChild(p1);
            tempdiv.appendChild(image);
            tempdiv.appendChild(innerdiv);
            thediv.appendChild(tempdiv);

           
          
        }
    });
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



function lyrics(){
    document.getElementById("myheader").innerHTML = "Search for Lyrics";
    //$("#mydiv").empty();
    
    
  var myurl="https://orion.apiseeds.com/api/music/lyric/the%20weeknd/call%20out%20my%20name?apikey=V2F8jieAgwae7erWpFWBZyNeNc0UJCvcePfHf7KDBTLrSVJfcKJCAqZ1Slywzw3l";
  var temp1 ="https://orion.apiseeds.com/api/music/lyric/";
    var temp2 = document.getElementById("input1id").value;
    var temp3 = "/" + document.getElementById("input2id").value;
  var temp4="?apikey=V2F8jieAgwae7erWpFWBZyNeNc0UJCvcePfHf7KDBTLrSVJfcKJCAqZ1Slywzw3l";
  var temp=temp1+temp2+temp3+temp4;
  var thediv = document.getElementById("mydiv");
  
    $.getJSON(temp, function (data) {
    console.log("working");
    var para = document.createElement('p');
    var tempdiv = document.createElement('div');
    tempdiv.className = "card w-100";
    var innerdiv=document.createElement('div');
    innerdiv.className = "card-body";
    innerdiv.style.boxShadow = "10px 10px 5px #46434B";

    var myh5=document.createElement('h5');
    myh5.className = "card-title";
    myh5.innerHTML = data.result.track.name;
    myh5.style.fontFamily = "Gill Sans";
    myh5.style.fontWeight = "bold";
    para.className = "card-text";
    para.style.fontFamily = "American Typewriter";
    para.innerHTML = data.result.track.text;

    innerdiv.appendChild(myh5);
    innerdiv.appendChild(para);
    tempdiv.appendChild(innerdiv);
    thediv.appendChild(tempdiv);

    

  });

}

// function show() {
//     $("#mydiv").empty();
//     document.getElementById("myheader").innerHTML = "Search for Lyrics";
//     var input1 = document.createElement('input');
//     input1.type="text";
//     input1.className = "form-control";
//     input1.setAttribute("id", "input1id");
//     input1.placeholder = "Artist Name";
//     var input2 = document.createElement('input');
//     input2.type = "text";
//     input2.className = "form-control";
//     input2.setAttribute("id", "input2id");
//     input2.placeholder = "Song Name";
//     var thediv = document.getElementById("mydiv");
//     var b = document.createElement('button');
//     b.className = "btn btn-dark";
//     b.setAttribute("id", "b6");
//     b.innerHTML = "Search";
//     thediv.appendChild(input1);
//     thediv.appendChild(input2);
//     b.onclick = lyrics;
//     thediv.appendChild(b);

// }

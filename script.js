const API_Key = "5cba0b39f8ee42b6b3bf38344cb9929a"
const BUSINESS_NEWS = ("/v2/top-headlines?country=us&category=business&apiKey=")
const SPORTS_NEWS = ("/v2/top-headlines?country=us&category=sports&apiKey=")
const TECHNOLOGY_NEWS = ("/v2/top-headlines?country=us&category=technology&apiKey=")
const ENTERTAINMENT_NEWS = ("/v2/top-headlines?country=us&category=entertainment&apiKey=")
const businessbtn = document.getElementById("business")
const sportsbtn = document.getElementById("sports")
const techbtn = document.getElementById("tech")
const entertainmentbtn = document.getElementById("entertainment")
const newsType = document.getElementById("newsType")
const newsDetails = document.getElementById("newsdetails")
var newsDataArr = [];

"proxy"="https://localhost:5000","https://newsapi.org/"

window.onload = function(){
  fetchsports_news();
}

businessbtn.addEventListener("click",function(){
  fetchbusiness_news();
})

sportsbtn.addEventListener("click",function(){
  fetchsports_news();
})

techbtn.addEventListener("click",function(){
  fetchtechnology_news();
})

entertainmentbtn.addEventListener("click",function(){
  fetchentertainment_news();
})

const fetchbusiness_news = async() =>{
  const response = await fetch(BUSINESS_NEWS + API_Key)
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }
  displayNews()
}
const fetchsports_news = async() =>{
  const response = await fetch(SPORTS_NEWS + API_Key)
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }
  displayNews()
}

const fetchtechnology_news = async() =>{
  const response = await fetch(TECHNOLOGY_NEWS + API_Key)
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }
  displayNews()
}

const fetchentertainment_news = async() =>{
  const response = await fetch(ENTERTAINMENT_NEWS + API_Key)
  if(response.status >=200 && response.status < 300){
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  }
  displayNews()
}

function displayNews(){
  newsDetails.innerHTML = "";
  if(newsDataArr.length == 0){
    newsDetails.innerHTML = "<h3>No Data Found</h3>"
    return;
  }

  newsDataArr.forEach(news =>{
    var col = document.createElement('div')
    col.className = "col-sm-4";

    var card = document.createElement('div')
    card.className = "";
    
    var image = document.createElement('img')
    image.src = news.urlToImage;
    
    var card_body = document.createElement('div');
    var newsHeading = document.createElement('h5');
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateheading = document.createElement('h6')
    dateheading.className = "text-primary date";
    dateheading.innerHTML = news.publishedAt;

    var discription = document.createElement('p');
    discription.className = "text-muted";
    discription.innerHTML = news.description;

    card_body.appendChild(newsHeading);
    card_body.appendChild(dateheading);
    card_body.appendChild(discription);
    
    card.appendChild(image);
    card.appendChild(card_body);
    col.appendChild(card);
    newsDetails.appendChild(col);
    console.log(news);
  })
}

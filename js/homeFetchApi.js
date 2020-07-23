const Api_Url = "https://api-task1.adminssw.com//news/allnews";
const getNews = document.querySelector(".new-row");

async function getData() {

  const response =  await fetch(Api_Url)
  .then(response => response.json())
  .then(contents => {
    contents.newsData.forEach(element => {
      //<div class="row">
        //<div class="col-lg-6">
          //<div class="card-element">
              // <img />
              // <h6></h6>
              // <p></p>
          //</div>
        //</div>
        //<div class="col-lg-6">
          // <div class="row">
            // <div class="col-lg-6">
                //<div class="card-element">
                  // <img />
                  // <h6></h6>
                  // <p></p>
              //</div>
            // </div>
            // <div class="col-lg-6">
                //<div class="card-element">
                  // <img />
                  // <h6></h6>
                  // <p></p>
              //</div>
            // </div>
          // </div>
        //</div>
      //</div>

      //bootstrap grid column 
      const columnElement = document.createElement('div');
      columnElement.classList.add("col-lg-6");

      //card
      const cardElement = document.createElement('div');
      cardElement.classList.add('card-new');
      columnElement.appendChild(cardElement);


      //image
      const imgElement = document.createElement('img');
      //imgElement.src = element.imagePath;
      imgElement.src = 'https://via.placeholder.com/500';
      cardElement.appendChild(imgElement);

      const cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");
      cardElement.appendChild(cardInfo);

      //title
      const title = document.createElement('h6');
      title.innerHTML = element.titel;
      cardInfo.appendChild(title);

      //details
      const details = document.createElement('p');
      details.innerHTML = element.description;
      cardInfo.appendChild(details);

      getNews.appendChild(columnElement);

      console.log(element);

    });
  })
  .catch(() => console.log("Can’t access " + Api_Url + " response. Blocked by browser?"));

};
getData();
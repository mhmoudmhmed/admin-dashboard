const Api_Url = "https://api-task1.adminssw.com//news/allnews";
const getNews = document.querySelector(".new-row");

async function getData() {

  const response =  await fetch(Api_Url)
  .then(response => response.json())
  .then(contents => {
    contents.newsData.forEach(element => {

      //bootstrap grid column 
      const columnElement = document.createElement('div');
      columnElement.classList.add("col-lg-6");

      //card
      const mediaElement = document.createElement('div');
      mediaElement.classList.add('card-new');
      columnElement.appendChild(mediaElement);

      //image
      const imgElement = document.createElement('img');
      //imgElement.src = element.imagePath;
      imgElement.src = 'https://via.placeholder.com/500';
      mediaElement.appendChild(imgElement);

      const cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");
      mediaElement.appendChild(cardInfo);

      //title
      const title = document.createElement('h6');
      title.innerHTML = element.titel;
      cardInfo.appendChild(title);

      //details
      const details = document.createElement('p');
      details.innerHTML = element.description;
      cardInfo.appendChild(details);

      //update button
      updateButton = document.createElement('button');
      updateButton.classList.add("btn");
      updateButton.classList.add("btn-success");
      updateButton.innerText = "Edit";

      //delete button
      deleteButton = document.createElement('button');
      deleteButton.classList.add("btn");
      deleteButton.classList.add("btn-danger");
      deleteButton.innerText = "Delete";

      const buttons = document.createElement('div');
      buttons.classList.add("buttons");
      buttons.appendChild(deleteButton);
      buttons.appendChild(updateButton);
      mediaElement.appendChild(buttons);

      getNews.appendChild(columnElement);

      console.log(element);

    });
  })
  .catch(() => console.log("Can’t access " + Api_Url + " response. Blocked by browser?"));

};
getData();
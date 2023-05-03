import axios from "axios"
const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imageContainerDiv = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorNamespan = document.createElement('span'); 

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author'); 
  imageContainerDiv.classList.add('img-container');
 
  headlineDiv.textContent =article.headline;
  authorImage.src = article.authorPhoto; 
  authorNamespan.textContent = `By ${article.authorName}`; 

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageContainerDiv);
  authorDiv.appendChild(authorNamespan);
  imageContainerDiv.appendChild(authorImage);

  return cardDiv;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const section = document.querySelector(selector);
  axios.get('http://localhost:5001/api/articles').then((res) => {
    const articles = res.data.articles;
    for (let key in articles) {
      const articlesAtKey = articles[key];
      for (let article of articlesAtKey){
        const articleCard = Card(article);
        section.appendChild(articleCard);
      }
    }
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }

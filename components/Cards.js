// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function cardMaker({ headline,authorName,authorPhoto }, topic) {
    //create elements
    const card = document.createElement('div');
    const artHead = document.createElement('div');
    const authCont = document.createElement('div');
    const imgCont = document.createElement('div');
    const authImg = document.createElement('img');
    const byline = document.createElement('span');

    //create hierarchy
    card.appendChild(artHead);
    card.appendChild(authCont);
    authCont.appendChild(imgCont);
    authCont.appendChild(byline);
    imgCont.appendChild(authImg);

    //adding classes
    card.classList.add('card','all',topic);
    artHead.classList.add('headline');
    authCont.classList.add('author');
    imgCont.classList.add('img-container');

    //adding content
    artHead.textContent = headline;
    authImg.src = authorPhoto;
    byline.textContent = authorName;

    card.addEventListener('click', () => console.log(headline)); //works because of closure!👍

    return card;
}

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res =>{
        console.log();
        for (let key in res.data.articles){
        res.data.articles[key].forEach(category => {
            document.querySelector('div.cards-container')
                    .appendChild(cardMaker(category,key));
        })}
    })
    .catch(err => {
        console.log(`Unable to retrieve article information, ${err}`)
    })
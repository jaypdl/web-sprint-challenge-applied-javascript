// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element 😮😮😮Too Late I installed it! LOL🤡🤡

console.log(axios.get('https://lambda-times-api.herokuapp.com/topics'));


function createTab(topic) {
    const tab = document.createElement('div');
    tab.classList.add('tab', topic);
    tab.textContent = topic;
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(item =>{
            item.classList.remove('active-tab');
        });
        tab.classList.add('active-tab');
        });
    tab.addEventListener('click', event => {
        document.querySelectorAll('div.card').forEach(item =>{
            if(!item.classList.contains(topic)){  /* //Does not work for node.js because article topic and tab are different node vs node.js... my code is looking for 'node.js', my article topic says 'node */
                item.style.display = 'none';
            }else {item.style.display = null}
    })})
    return tab;
}

//Stretch below
document.querySelector('div.topics').appendChild(createTab('all'));
document.querySelector('div.tab.all').classList.add('active-tab');
//stretch above


axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then(res =>{
        res.data.topics.forEach(topic =>{
            document.querySelector('div.topics').appendChild(createTab(topic));
        })
    })
    .catch(err => {
        console.log(`Failure fetching topics: ${err}`);
    })

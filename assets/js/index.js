var ques1 = document.querySelector('.question1');
ques1.addEventListener('click', king)

function king(e) {
    e.preventDefault();
    ques1.style = "  border: 1px solid #e2ab04; color: #e2ab04;"
    var ans1 = document.querySelector('.answer1');
    var newElement = document.createElement('p');
    var newTextNode = document.createTextNode('You need to mint a raccoon on our website. For this you need some ETH and metamask wallet.');
    newElement.appendChild(newTextNode);
    console.log(newElement);
    newElement.style = 'color: white;  margin:10px 330px';
    var ques2 = document.querySelector('.question2');
    // for insert before
    var target = document.querySelector('#freq');
    target.insertBefore(newElement, ques2);
    //  for remove

}


var ques2 = document.querySelector('.question2');
ques2.addEventListener('click', king2)

function king2(e) {
    e.preventDefault();
    ques2.style = "  border: 1px solid #e2ab04; color: #e2ab04;"
    var ans2 = document.querySelector('.answer2');
    var newElement = document.createElement('p');
    var newTextNode = document.createTextNode('This is the Raccoon Mafia family with their own rules and laws, where everyone respects the other family member. Family consists of 10 000 NFTs built on the Ethereum network. Each Raccoon costs 0.05 ETH.');
    newElement.appendChild(newTextNode);
    newElement.style = 'color: white;  margin:10px 280px';
    var ques3 = document.querySelector('.question3');
    // for insert before
    var target = document.querySelector('#freq');
    target.insertBefore(newElement, ques3);
    //  for remove

}
// for question no 3
var ques3 = document.querySelector('.question3');
ques3.addEventListener('click', king3)

function king3(e) {
    e.preventDefault();
    ques3.style = "  border: 1px solid #e2ab04; color: #e2ab04;"
    var ans3 = document.querySelector('.answer3');
    var newElement = document.createElement('p');
    var newTextNode = document.createTextNode('This is the Raccoon Mafia family with their own rules and laws, where everyone respects the other family member. Family consists of 10 000 NFTs built on the Ethereum network. Each Raccoon costs 0.05 ETH.');
    newElement.appendChild(newTextNode);
    newElement.style = 'color: white;  margin:10px 280px';
    var ques4 = document.querySelector('.question4');
    // for insert before
    var target = document.querySelector('#freq');
    target.insertBefore(newElement, ques4);
    //  for remove

}

// for question no 4
var ques4 = document.querySelector('.question4');
ques4.addEventListener('click', king4)

function king4(e) {
    e.preventDefault();
    ques4.style = "  border: 1px solid #e2ab04; color: #e2ab04;"
    var ans4 = document.querySelector('.answer4');
    var newElement = document.createElement('p');
    var newTextNode = document.createTextNode('Reveal will be immediately after the sold out or after 3 days from the start of sale, if the sold out does not take place');
    newElement.appendChild(newTextNode);
    newElement.style = 'color: white;  margin:10px 280px';
    var ans4 = document.querySelector('.answer4');
    // for insert before
    var target = document.querySelector('#freq');
    target.insertBefore(newElement, ans4);
    //  for remove

}
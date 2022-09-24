const placesList = document.getElementById('fruits-list');
const li = document.createElement('li');
li.innerText = 'pineapple';

placesList.appendChild(li);


const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Ami khabar kheyeye felechi rater ta';

section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Grill with Nan';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Daal bhaat';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);
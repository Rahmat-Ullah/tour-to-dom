const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid blue';
    section.style.margin = '5px';
    section.style.borderRadius = '5px';
    section.style.padding = '5px';
    section.style.backgroundColor = 'grey';
}


const placesContainer = document.getElementById('places');
placesContainer.style.backgroundColor = 'yellow';
placesContainer.style.padding = '10px';
placesContainer.style.border = '3px solid green';

const textCenter = document.getElementById('inportant-places');
textCenter.classList.remove('inportant-places');
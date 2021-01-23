// console.log("It worked");

const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

//e stands for event
// button.addEventListener('click', (e) => {
//   console.log('you clicked on me');
//   console.log(e);
// })

const whatIsTheId = (e) => {
  console.log(`you clicked ${e.target.id}`);

  if (e.target.id === 'main-btn') {
    container.innerHTML = 'you clicked the main button';
  } else {
    container.innerHTML = 'you clicked the other button'
  }
}

// Main Button
button.addEventListener('click', whatIsTheId);

// Other Button
const buttonTwo = document.querySelector('#other-btn');

buttonTwo.addEventListener('click', whatIsTheId);

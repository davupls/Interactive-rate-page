const ratingButton = document.querySelectorAll('.rating-btn');
const submit = document.querySelector('.submit');
let ratingValue = 0;

ratingButton.forEach(item => {
  item.addEventListener('click', event => {
    resetColor();
    item.style.backgroundColor = '#7C8798';
    item.style.color = '#FFF';
    ratingValue = `${item.innerHTML}`;  // string value
  })
})

function resetColor() {
  ratingButton.forEach(item => {
    item.style.backgroundColor = '#262E38';
    item.style.color = '#7C8798';
  })
}


const questionCard = document.querySelector('.card-0');
const thanksCard = document.querySelector('.card-1');
const spanElement = document.querySelector('span');

submit.addEventListener('click', () => {
  questionCard.style.display = 'none';
  thanksCard.style.display = 'flex';
  spanElement.innerHTML = `${ratingValue}`;
  console.log('submit button clicked');
  resetColor();
})



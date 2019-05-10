
//const countArr = []; 

var count;

const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
const countEl = document.getElementById('count');
const inputEl = document.getElementById('input');

document.getElementById('plus').addEventListener('click', handlePlus);
document.getElementById('minus').addEventListener('click', handleMinus);






init();

function handlePlus(evt) {
  let inputValue = document.getElementById('input').value;
  valueNum = parseInt(inputValue, 10);
  count = valueNum + count;
  render();

}

function handleMinus(evt) {
  let inputValue = document.getElementById('input').value;
  valueNum = parseInt(inputValue, 10);
  count = count - valueNum;
  render();
}

function render() {
  countEl.textContent = count;
  console.log(Math.sign(count));
  if (Math.sign(count) === -1) {
    countEl.style.color = 'red';
  }
  
}




function init() {
  count = 0;
  render();

}
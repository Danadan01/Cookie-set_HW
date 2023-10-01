const answerDiv = document.querySelector('.answer');
const setDiv = document.querySelector('.set');
const input = document.querySelector('#input');
const addButtn = document.querySelector('#add');
const checkButtn = document.querySelector('#check');
const removeButtn = document.querySelector('#remove');

const set = new Set();

addButtn.addEventListener('click', () => {
  if(set.has(input.value)) {
    answerDiv.innerHTML = `Element "${input.value}" is already added to the Set`;
    answerDiv.style.color = 'red';
  } else {
    set.add(input.value);
    answerDiv.innerHTML = `Element "${input.value}" successfully added to the Set`;
    answerDiv.style.color = 'green';
  }
});

checkButtn.addEventListener('click', () => {
  const isInSet = set.has(input.value);
  if (isInSet) {
    answerDiv.innerHTML = `Element "${input.value}" is present in the Set`;
    answerDiv.style.color = 'green';
  } else {
    answerDiv.innerHTML = `Element "${input.value}" is not present in the Set`;
    answerDiv.style.color = 'red';
  }
});

removeButtn.addEventListener('click', () => {
  if (set.delete(input.value)) {
    answerDiv.innerHTML = `Element "${input.value}" successfully removed from the Set`;
    answerDiv.style.color = 'green';
  } else {
    answerDiv.innerHTML = `Element "${input.value}" doesn't exist in the Set`;
    answerDiv.style.color = 'red';
  }
});

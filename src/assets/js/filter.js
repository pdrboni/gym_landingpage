let li = document.querySelectorAll('li');
let bodybuilding = document.getElementsByClassName('bodybuilding');
let yoga = document.getElementsByClassName('yoga');
let crossfit = document.getElementsByClassName('crossfit');
let fitness = document.getElementsByClassName('fitness');
let local = document.getElementsByClassName('local');
let listOfImgs = [bodybuilding, yoga, crossfit, fitness, local]
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
const span = document.getElementsByClassName('close')[0];

document.querySelectorAll('.image img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

span.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

function handleBodybuildingImgs() {
  for (let collection of listOfImgs) {
    for (let element of collection) {
      if(element.classList.contains('bodybuilding')){
        element.style.display = 'block';
      }
      if(!element.classList.contains('bodybuilding')){
        element.style.display = 'none';
      }
    }
  }
}

function handleCrossfitImgs() {
  for (let collection of listOfImgs) {
    for (let element of collection) {
      if(element.classList.contains('crossfit')){
        element.style.display = 'block';
      }
      if(!element.classList.contains('crossfit')){
        element.style.display = 'none';
      }
    }
  }
}

function handleLocalImgs() {
  for (let collection of listOfImgs) {
    for (let element of collection) {
      if(element.classList.contains('local')){
        element.style.display = 'block';
      }
      if(!element.classList.contains('local')){
        element.style.display = 'none';
      }
    }
  }
}

function handleFitnessImgs() {
  for (let collection of listOfImgs) {
    for (let element of collection) {
      if(element.classList.contains('fitness')){
        element.style.display = 'block';
      }
      if(!element.classList.contains('fitness')){
        element.style.display = 'none';
      }
    }
  }
}

function handleAllImgs() {
  for (let collection of listOfImgs) {
    for (let element of collection)
      element.style.display = 'block';
  }
}

for (const item of li) {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('bodybuilding-imgs')){
      handleBodybuildingImgs();
    }

    if (e.target.classList.contains('crossfit-imgs')){
      handleCrossfitImgs();
    }

    if (e.target.classList.contains('all-imgs')){
      handleAllImgs();
    }

    if (e.target.classList.contains('local-imgs')){
      handleLocalImgs();
    }

    if (e.target.classList.contains('fitness-imgs')){
      handleFitnessImgs();
    }
  }
  )
}

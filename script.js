// SLIDER - 1

// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');
// const items = document.querySelector('#items');
// const computedStyle = getComputedStyle(items);


// rightBtn.addEventListener('click', e => {
//   e.preventDefault();

//   let currentRight = parseInt(computedStyle.right);

//   console.log(currentRight);

//   if (currentRight < 500) {
//     items.style.right = `${currentRight + 100}px`;
//   }
  
// })

// leftBtn.addEventListener('click', e => {
//   e.preventDefault();

//   let currentRight = parseInt(computedStyle.right);

//   console.log(currentRight);

//   if (currentRight > 0) {
//     items.style.right = `${currentRight - 100}px`;
//   }

// })


// SLIDER - 2

// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');
// const itemsList = document.querySelector('#items');
// const computedStyles = window.getComputedStyle(itemsList);
// const items = document.querySelectorAll('.item'); 

// const minRight = 0;
// const itemWidth = getComputedStyle(items[0]).width;
// const step = parseInt(itemWidth);
// const preShownItems = 300 / step;
// const maxRight = (items.length - preShownItems) * step;
// let currentRight = 0;

// itemsList.style.right = currentRight;

// rightBtn.addEventListener("click", e => {
//   e.preventDefault();

//   if (currentRight < maxRight) {
//     currentRight += step;
//     itemsList.style.right = `${currentRight}px`;
//   }
// })

// leftBtn.addEventListener("click", e => {
//   e.preventDefault();

//   if (currentRight > minRight) {
//     currentRight -= step;
//     itemsList.style.right = `${currentRight}px`;
//   }
// })



// SLIDER - 3

const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const itemsList = document.querySelector('#items');

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === 'right') {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
};

rightBtn.addEventListener('click', (e) => {
  loop('right', e);
});

leftBtn.addEventListener('click', (e) => {
  loop('left', e);
});



// jQuery

// $(document).ready(() => {
//   console.log('DOM построен');
//   console.log(this);
// });

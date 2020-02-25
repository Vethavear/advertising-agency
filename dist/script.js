const carouselClients = document.getElementsByClassName('carousel').item(0);
const carouselRatings = document.getElementsByClassName('ratings').item(0);
const bars = document.getElementsByClassName('fill');
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const elementsToFade = document.getElementsByClassName('fade');
const portfolioImgs = document.querySelector("#project > div > div.items").children;
const counters = document.getElementsByClassName('counter');
const countIt = document.getElementById('countit');


const translate = (pixels, doc) => {
  doc.style.transform = '';
  doc.style.transform = `translateX(${pixels}px)`;
}

const slideClientsItems = () => {
  setTimeout(() => { translate(-280, carouselClients) }, 2000)
  setTimeout(() => { translate(-565, carouselClients) }, 4000)
  setTimeout(() => { translate(0, carouselClients) }, 6000)
}
setInterval(slideClientsItems, 2000);

const slideRatingsItems = () => {
  setTimeout(() => { translate(-350, carouselRatings) }, 3000)
  // setTimeout(() => { translate(-600,carouselRatings) }, 4000)
  setTimeout(() => { translate(0, carouselRatings) }, 6000)
}
setInterval(slideRatingsItems, 3000);


const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const fadeIn = () => {

  for (let i = 0; i < elementsToFade.length - 1; i++) {
    const element = elementsToFade.item(i);
    if (isInViewport(element)) {
      elementsToFade.item(i + 1).classList.add('fadeIn');
    }
  }
}
const fillBar = () => {
  for (let i = 0; i < bars.length; i++) {
    const element = bars.item(i);
    if (isInViewport(element)) {
      element.classList.add('fillBar');
    }
  }
}

const filter = (type) => {
  if (type === 'all') {
    for (let i = 0; i < portfolioImgs.length; i++) {
      const element = portfolioImgs.item(i);
      element.classList.add('visible');
      element.classList.remove('opacity0');

    }
  }
  else {
    for (let i = 0; i < portfolioImgs.length; i++) {
      const element = portfolioImgs.item(i);
      if (element.classList.contains(type.toString())) {
        console.log(type.toString());
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
  }
}

const changeCounter = (element, newContent) => {
  element.innerHTML = newContent.toString();
}
const updateCounters = () => {

  if (isInViewport(countIt)) {

    for (let i = 0; i < counters.length; i++) {
      const element = counters.item(i);
      if (element.classList.contains('counted')) {
      } else {
        let end = parseInt(element.innerHTML) -1;
        element.innerHTML = '1';
        element.classList.add('counted');
        const interval = setInterval(() => {

          let current = parseInt(element.innerHTML);
          element.innerHTML = current+1;
          if(current===end){
            clearInterval(interval);
          }
        
        },10);
        
      }
    }
  }
}
//listeners
menu.addEventListener('click', el => {
  console.log(portfolioImgs);
  filter(el.target.id);
});

window.addEventListener('load', fadeIn);
window.addEventListener('scroll', fillBar);
window.addEventListener('scroll', fadeIn);
window.addEventListener('scroll', updateCounters);
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    nav.style.background = ' linear-gradient(to right, rgba(233, 76, 233, 1), rgba(96, 19, 232, 1))';
    nav.style.height = '8vh';
  } else {
    nav.style.background = 'none';
    nav.style.height = '10vh';
  }
});



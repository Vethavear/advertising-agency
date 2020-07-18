const carouselClients = document.getElementsByClassName('carousel').item(0);
const carouselRatings = document.getElementsByClassName('ratings').item(0);
const bars = document.getElementsByClassName('fill');
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const elementsToFade = document.getElementsByClassName('fade');
const portfolioImgs = document.querySelector("#project > div > div.items").children;
const counters = document.getElementsByClassName('counter');
const countIt = document.getElementById('countit');
const questions = document.getElementsByClassName('questions').item(0);
const burger = document.getElementById('burger');

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
        let end = parseInt(element.innerHTML) - 1;
        element.innerHTML = '1';
        element.classList.add('counted');
        const interval = setInterval(() => {
          let current = parseInt(element.innerHTML);
          element.innerHTML = current + 1;
          if (current === end) {
            clearInterval(interval);
          }
        }, 10);
      }
    }
  }
}
const navChange = () => {
  if (!isMobileDevice()) {
    if (window.scrollY > 50) {
      nav.style.background = ' linear-gradient(to right, rgba(233, 76, 233, 1), rgba(96, 19, 232, 1))';
      nav.style.height = '8vh';
    } else {
      nav.style.background = 'none';
      nav.style.height = '10vh';
    }
  } else {
    if (window.scrollY > 50) {
      nav.style.background = ' linear-gradient(to right, rgba(233, 76, 233, 1), rgba(96, 19, 232, 1))';
    } else {
      nav.style.background = 'none';
    }
  }
}

const toggleAnswer = (element) => {
  // change to 200px;
  console.log(element.style.height);
  if (element.style.height === '75px') {
    element.classList.add('rotateIcon');
    element.style.height = '200px';
  } else {
    element.style.height = '75px';
    element.classList.remove('rotateIcon');

  }
}

const toggleBurger = () => {

  if (nav.classList.contains('burgerClicked')) {
    nav.classList.remove('burgerClicked');
  } else {
    nav.classList.add('burgerClicked');
  }
}

const isMobileDevice = () => {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

if (isMobileDevice()) {
  for (let i = 0; i < bars.length; i++) {
    const element = bars.item(i);
    element.classList.add('fillBar');
  }
}
//listeners
menu.addEventListener('click', el => {
  filter(el.target.id);
});

questions.addEventListener('click', el => {
  if (el.target.closest('.question')) {
    toggleAnswer(el.target.closest('.question'));
  }
});

nav.addEventListener('click', e => {
  if (e.target.closest('li') || e.target.id == 'burger'){
    toggleBurger();
  }
});
window.addEventListener('load', fadeIn);
window.addEventListener('scroll', () => {
  fillBar();
  fadeIn();
  updateCounters();
  navChange();
});



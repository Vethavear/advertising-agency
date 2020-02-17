// carousel 1960px
// container 1100px;
// one element = 265px (w/margin)

const carouselClients = document.getElementsByClassName('carousel').item(0);

const translate = (pixels) => {
    carouselClients.style.transform = '';
    carouselClients.style.transform = `translateX(${pixels}px)`;

}

const slideClientsItems = () => {
    setTimeout(() => { translate(-280) }, 2000)
    setTimeout(() => { translate(-565) }, 4000)
    setTimeout(() => { translate(0) }, 6000)


}
setInterval(slideClientsItems, 2000);




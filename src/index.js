import './style/index.css';
import './style/loader.css';
import './style/header.css';
import './style/nav-mobile.css';
import './style/aside.css';
import './style/main.css';
import './style/footer.css';
import { blogArticle } from './data/data';
import { createSection, handleOpenMobileNav, createNav } from './functions.js';

// Turn off container to load the page
document.querySelector('.container').style.setProperty('display', 'none');

// Create Nav for the desktop view
if (window.innerWidth >= 992) {
  createNav();
}

// Create list of articles
const main = document.getElementById('main');
blogArticle.map((el) => {
  const article = createSection(
    el.id,
    el.mission,
    el.year,
    el.description,
    el.links.wiki,
    el.links.image
  );
  return main.appendChild(article);
});

// Add open event listener for mobile nav
const navMobileBtnOpen = document.getElementById('nav-button-open');
navMobileBtnOpen.addEventListener('click', handleOpenMobileNav);

// Turn on container after the loading of the page
setTimeout(() => {
  document.getElementById('loader').style.setProperty('display', 'none');
  document.querySelector('.container').style.removeProperty('display', 'none');
}, 1000);

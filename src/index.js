import './style/index.css';
import './style/header.css';
import './style/nav-mobile.css';
import './style/aside.css';
import './style/main.css';
import './style/footer.css';
import { blogArticle } from './data/data';
import { createSection, handleOpenMobileNav, createNav } from './functions.js';

// Create Nav for the desktop view
createNav();

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

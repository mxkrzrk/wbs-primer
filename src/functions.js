import { blogArticle } from './data/data';

function createSection(id, mission, year, description, wiki, image) {
  const section = document.createElement('section');
  section.classList.add('section');
  section.setAttribute('id', id);
  section.innerHTML = `
  <article class="section-article">
    <div class="section-article-image-box">
      <img
        src="${image}"
        alt="image"
        class="section-article-image"
      />
    </div>
    <div class="section-article-text">
      <div class="section-article-text-info">
        <h2>${mission}</h2>
        <span>${year}</span>
        <a href="${wiki}" target="_blank"></a>
      </div>
      <p>
      ${description}
      </p>
    </div>
  </article>
`;
  return section;
}

function handleOpenMobileNav() {
  // Create array with info for nav menu
  const titleArticles = blogArticle.map((el) => {
    const navLinks = { id: el.id, m: el.mission, y: el.year };
    return navLinks;
  });
  // Block scroll of body
  document.querySelector('body').style.overflow = 'hidden';
  // Create nav
  const nav = document.getElementById('nav-mobile');
  nav.innerHTML = `
  <div class="nav-mobile-icon"><div></div></div>
  <div class="nav-mobile-button" id="nav-button-close"></div>`;
  nav.style.display = 'block';
  // Create list of links
  const ul = document.createElement('ul');
  titleArticles.map((el) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = el.m;
    a.setAttribute('href', '#');
    a.setAttribute('data-id', el.id);
    const span = document.createElement('span');
    span.innerText = el.y;
    // Add scroll event for nav link
    a.addEventListener('click', scrollToSection);
    // Append link
    li.appendChild(a);
    li.appendChild(span);
    return ul.appendChild(li);
  });
  // Append list of links
  nav.appendChild(ul);
  // Add close event listener for mobile nav
  const navMobileBtnClose = document.getElementById('nav-button-close');
  navMobileBtnClose.addEventListener('click', handleCloseMobileNav);
}

function handleCloseMobileNav() {
  const nav = document.getElementById('nav-mobile');
  nav.style.display = 'none';
  nav.innerHTML = '';
  // Add scroll of body
  document.querySelector('body').style.overflow = 'none';
}

function scrollToSection(e) {
  const target = document.getElementById(e.target.dataset.id);
  // Check the viewport
  if (window.innerWidth >= 992) {
    const main = document.getElementById('main');
    main.scrollTo({
      top: target.offsetTop - 100,
      left: target.offsetLeft,
      behavior: 'smooth',
    });
  } else {
    handleCloseMobileNav();
    window.scrollTo({
      top: target.offsetTop,
      left: target.offsetLeft,
      behavior: 'smooth',
    });
    // Add scroll of body
    document.querySelector('body').style.overflow = 'scroll';
  }
}

function createNav() {
  // Create array with info for nav menu
  const titleArticles = blogArticle.map((el) => {
    const navLinks = { id: el.id, m: el.mission, y: el.year };
    return navLinks;
  });
  // Create list of links
  const nav = document.getElementById('nav');
  const ul = document.createElement('ul');
  titleArticles.map((el) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = el.m;
    a.setAttribute('href', '#');
    a.setAttribute('data-id', el.id);
    const span = document.createElement('span');
    span.innerText = el.y;
    // Add scroll event for nav link
    a.addEventListener('click', scrollToSection);
    // Append link
    li.appendChild(a);
    li.appendChild(span);
    return ul.appendChild(li);
  });
  nav.appendChild(ul);
}

export { createSection, handleOpenMobileNav, handleCloseMobileNav, createNav };

import { blogArticle } from './data/data';

function createSection(mission, year, description, wiki, image) {
  const section = document.createElement('section');
  section.classList.add('section');
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
    const navLinks = { m: el.mission, y: el.year };
    return navLinks;
  });

  const nav = document.getElementById('nav-mobile');
  nav.innerHTML = `
  <div class="nav-mobile-icon"><div></div></div>
  <div class="nav-mobile-button" id="nav-button-close"></div>`;
  nav.style.display = 'block';

  const ul = document.createElement('ul');
  titleArticles.map((el) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="#">${el.m}</a><span>${el.y}</span>
    `;
    return ul.appendChild(li);
  });
  nav.appendChild(ul);

  // Add close event listener for mobile nav
  const navMobileBtnClose = document.getElementById('nav-button-close');
  navMobileBtnClose.addEventListener('click', handleCloseMobileNav);
}

function handleCloseMobileNav() {
  const nav = document.getElementById('nav-mobile');
  nav.style.display = 'none';
  nav.innerHTML = '';
}

export { createSection, handleOpenMobileNav, handleCloseMobileNav };

import './style/index.css';
import './style/header.css';
import './style/main.css';
import './style/footer.css';
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

const main = document.getElementById('main');
blogArticle.map((el) => {
  const article = createSection(
    el.mission,
    el.year,
    el.description,
    el.links.wiki,
    el.links.image
  );
  return main.appendChild(article);
});

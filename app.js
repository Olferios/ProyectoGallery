const imgs = document.querySelectorAll('.img img');

imgs.forEach((img) => {
  img.addEventListener('mouseover', () => {
    const info = img.parentNode.querySelector('.info');
    info.innerHTML = `
      <h2>${img.dataset.title}</h2>
      <p>Autor: ${img.dataset.author}</p>
      <p>${img.dataset.description}</p>
    `;
  });
});
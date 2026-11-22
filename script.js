const container = document.getElementById("grid");

for (let i = 0; i < 800; i++) {
  const box = document.createElement('div');
  box.className = 'square';

  box.addEventListener('mouseenter', () => {
    box.classList.add('active');

    setTimeout(() => {
      box.classList.remove('active');
    }, 1000);
  });

  container.appendChild(box);
}
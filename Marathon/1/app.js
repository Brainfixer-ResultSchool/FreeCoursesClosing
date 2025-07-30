document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Изменить цвет';
  document.body.appendChild(button);

  function getRandomColor() {
    return `#${Math.round(Math.random() * Math.pow(2, 24))
      .toString(16)
      .padStart(6, '0')}`;
  }

  button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
});
